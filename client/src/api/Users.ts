import { lemuseeClient as axios } from "./axios";
import { setIsLoggedIn, setUserData } from "../Types/api";
import { removeCookieToken } from "../storage/accesCookie";
import { authAPI } from "./auth";

export const userAPI = {

  /**내 프로필 조회 api, access token을 받아 user data를 조회 */
  async axiosGetMyProfile () {
    const {
      data: {code, result},
    } = await axios.get(`/members`);

    if (code !== 1000) {
      throw new Error(code);
    };

    return result;
  },

  /**logout patch, token 삭제, set userId null */
  async axiosPatchLogout (setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    const {
      data: { code },
    } = await axios.post(`/members/logout`);

    if (code === 1000) {
      this.handleLogout(setUserData,setIsLoggedIn);
    }
    if (code === 2001) {
      const refreshACCessTokenCode = await authAPI.refreshAccessToken();
      if (refreshACCessTokenCode === 1000) {
        this.axiosPatchLogout(setUserData, setIsLoggedIn);
      }
      window.alert("로그아웃에 실패했습니다. 새로고침 해주세요.");
    }
  },

  /**access token 삭제, set userId null */
  handleLogout(setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    delete axios.defaults.headers.common.Authorization;
    removeCookieToken('accessToken');
    setUserData(null);
    setIsLoggedIn(false);
  },
};