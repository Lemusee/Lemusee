import { lemuseeClient as axios } from "../api/axios";
import { userAPI } from "../api/users";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";
import { IMemberLoginForm, IPersonal } from "../Types";
import { setToken } from "../storage/token";
import { useSetRecoilState } from "recoil";
import { myUserIdAtom, myPersonalDataAtom } from "../storage/user";
import { isAdmin, isLoggedInAtom } from "../storage/common";
import { getCookieToken } from "../storage/accesCookie";

const useAuthAPI = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setUserId = useSetRecoilState(myUserIdAtom);
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  
  const login = async (formResult:IMemberLoginForm) => {
    const {
      data: { code, result },
    } = await axios.post(`/auth/login${formResult.autoLogin ? "/auto" : ""}`, {
      "email": formResult.email,
      "password" : formResult.password,
    });
    if (code !== 1000) {
      throw new Error(code);
    };
    handleAuthenticationSuccess(result);
  };
  

  const handleAuthenticationSuccess = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = accessToken; //axios header에 accessToken 추가
    setIsLoggedIn(true);
    setToken(accessToken);
    getMyPersonalData();
    silentlyRefreshAccessTokenAfterInterval();
  };

  const silentlyRefreshAccessTokenAfterInterval = () =>
    setTimeout(
      silentlyRefreshAccessToken,
      (JWT_EXPIRE_TIMEOUT - 3) * 1000 //30분
    );

  const silentlyRefreshAccessToken = async () => {
    const token = getCookieToken();
    const {
      data: { code, result },
    } = await axios.post('/auth/jwt', token);

    // 유효한 로그인 상태일 때 (유효한 refresh token)
    if (code === 1000) {
      handleAuthenticationSuccess(result.accessToken);
      return;
    }

    if (code === 2003) {
      window.alert('로그인 유지 토큰이 만료되어 로그아웃됩니다.');
    }
    userAPI.handleLogout(setUserId, setUserData, setIsLoggedIn);
  };

  

  const getMyPersonalData = async () => {
    const {
      data: {code, result},
    } = await axios.get('members');

    if (code === 1000) {
      const userData:IPersonal = {
        id: result.userId,
        email: result.email,
        nickName: result.nickname,
        team: result.team,
        isChief: result.isChief,
        birthYear: result.birthYear,
        department: result.department,
        phone: result.phone,
        studentId: result.studentId,
        introduce: result.introduce,
        role: result.isChief,
        createdAt: "",
        updatedAt: "",
      };
      setUserData(userData);
      setUserId(result.userId);
      if (result.isChief) {
        setIsAdmin(true);
      };
    };

    if (code !== 1000) {
      throw new Error(code);
    };
  };

  return {
    login,
    silentlyRefreshAccessToken,
  }
};

export default useAuthAPI;