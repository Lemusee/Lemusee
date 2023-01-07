import { lemuseeClient as axios } from "../api/axios";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";
import { IMemberLoginForm } from "../Types";
import { useSetRecoilState } from "recoil";
import { myPersonalDataAtom } from "../storage/user";
import { isAdmin, isLoggedInAtom } from "../storage/common";
import { getCookieToken, setCookieToken } from "../storage/accesCookie";
import { userAPI } from "../api/users";

const useAuthAPI = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  
  /**로그인, 초기 로그인 설정, 30분-3초마다 한번씩 jwt 재발급 요청 코드 */
  const login = async (formResult:IMemberLoginForm) => {
    const {
      data: { code, result },
    } = await axios.post(`/auth/login${formResult.autoLogin ? "/auto" : ""}`, {
      "email": formResult.email,
      "password" : formResult.password,
    });
    
    if (code && code === 2017) {
      window.alert("존재하지 않는 회원정보입니다.");
    };
    if (code && code === 4000) {
      window.alert("서버 연결 오류");
    };
    handleAuthenticationSuccess(result);
  };
  
  /**로그인 성공시 accessToken 세팅 및 프로필 데이터 get */
  const handleAuthenticationSuccess = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = accessToken; //axios header에 accessToken 추가
    setIsLoggedIn(true);
    setCookieToken(accessToken);
    getMyPersonalData();
    silentlyRefreshAccessTokenAfterInterval();
  };

  /**accessToken 만료 전 jwt 재발급 요청 */
  const silentlyRefreshAccessTokenAfterInterval = () =>
    setTimeout(
      silentlyRefreshAccessToken,
      (JWT_EXPIRE_TIMEOUT - 3) * 1000 //30분
    );

  /**jwt 재발급 api, token 만료 및 통신 오류시 로그아웃 */
  const silentlyRefreshAccessToken = async () => {
    const token = getCookieToken('accessToken');
    const {
      data: { code, result },
    } = await axios.post('/auth/jwt', token);

    // 유효한 로그인 상태일 때 (유효한 refresh token)
    if (code === 1000) {
      handleAuthenticationSuccess(result.token);
      return;
    }
    /**token이 만료되지 않은 경우 보유한 accessToken을 통해 자동 로그인 */
    if (code === 2009) {
      handleAuthenticationSuccess(token);
      return;
    }
    else if (code === 2003) {
      window.alert('로그인 유지 토큰이 만료되어 로그아웃됩니다.');
      userAPI.handleLogout(setUserData, setIsLoggedIn);
      setIsAdmin(false);
    }
    else {
      userAPI.handleLogout(setUserData, setIsLoggedIn);
      console.log("JWT POST 실패");
    }
  };

  /**유저 프로필 정보 get */
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
    getMyPersonalData,
  }
};

export default useAuthAPI;