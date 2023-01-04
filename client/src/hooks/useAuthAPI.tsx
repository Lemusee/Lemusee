import { lemuseeClient as axios } from "../api/axios";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";
import { IMemberLoginForm } from "../Types";
import { useSetRecoilState } from "recoil";
import { myPersonalDataAtom } from "../storage/user";
import { isAdmin, isLoggedInAtom } from "../storage/common";
import { getCookieToken, setCookieToken } from "../storage/accesCookie";
import { userAPI } from "../api/users";
import { Cookies } from "react-cookie";

const useAuthAPI = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
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
    setCookieToken(accessToken);
    getMyPersonalData();
    silentlyRefreshAccessTokenAfterInterval();
  };

  const silentlyRefreshAccessTokenAfterInterval = () =>
    setTimeout(
      silentlyRefreshAccessToken,
      (JWT_EXPIRE_TIMEOUT - 3) * 1000 //30분
    );

  const silentlyRefreshAccessToken = async () => {
    const token = getCookieToken('accessToken');
    console.log(getCookieToken('refreshToken'));
    const headers = {
      'Cookie': token,
    }
    const {
      data: { code, result },
    } = await axios.post('/auth/jwt', token);

    // 유효한 로그인 상태일 때 (유효한 refresh token)
    if (code === 1000) {
      handleAuthenticationSuccess(result.accessToken);
      console.log("jwt 재발급 완료", result);
      return;
    }
    else if (code === 2003) {
      window.alert('로그인 유지 토큰이 만료되어 로그아웃됩니다.');
      userAPI.handleLogout(setUserData, setIsLoggedIn);
      setIsAdmin(false);
    }
    else {
      console.log("JWT POST 실패");
      console.log("result", code);
    }
  };

  const getMyPersonalData = async () => {
    const {
      data: {code, result},
    } = await axios.get('/members');

    if (code === 1000) {
      setUserData(result);
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