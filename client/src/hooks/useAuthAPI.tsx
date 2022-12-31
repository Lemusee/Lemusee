import { lemuseeClient as axios } from "../api/axios";
import { userAPI } from "../api/users";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";
import { IMemberLoginForm } from "../Types";
import { authAtom, setToken } from "../storage/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { myUserIdAtom } from "../storage/user";
import { isLoggedInAtom } from "../storage/common";

const useAuthAPI = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setUserId = useSetRecoilState(myUserIdAtom);
  
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
    handleAuthenticationSuccess(result.accessToken);
  };
  
  const [accessToken, setAccessTokenAtom] = useRecoilState(authAtom);

  const handleAuthenticationSuccess = (accessToken: string) => {
    axios.defaults.headers.common.Authorization = accessToken;
    setIsLoggedIn(true);
    setToken({payload:accessToken, setRecoil:setAccessTokenAtom});
    // silentlyRefreshAccessTokenAfterInterval();
  };

  const silentlyRefreshAccessTokenAfterInterval = () =>
    setTimeout(
      silentlyRefreshAccessToken,
      (JWT_EXPIRE_TIMEOUT - 3) * 1000
    );

  const silentlyRefreshAccessToken = async () => {
    const {
      data: { code, result },
    } = await axios.post('/auth/jwt', accessToken);

    // 유효한 로그인 상태일 때 (유효한 refresh token)
    if (code === 1000) {
      handleAuthenticationSuccess(result.accessToken);
      return;
    }

    if (code === 2003) {
      window.alert('로그인 유지 토큰이 만료되어 로그아웃됩니다.');
    }
    userAPI.handleLogout(setUserId);
  };

  const getMyPersonalData = async () => {
    const {
      data: {code, result},
    } = await axios.get('members');

    if (code === 1000) {

    }

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