import { lemuseeClient as axios } from "./axios";
import { setIsLoggedIn, setUserData, setUserId } from "../Types/api";
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
  async axiosPatchLogout (setId:setUserId, setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    const {
      data: { code },
    } = await axios.patch(`/members/logout`);

    if (code === 1000) {
      this.handleLogout(setId,setUserData,setIsLoggedIn);
      console.log("로그아웃");
    }
    if (code === 2001) {
      const refreshACCessTokenCode = await authAPI.refreshAccessToken();
      if (refreshACCessTokenCode === 1000) {
        this.axiosPatchLogout(setId, setUserData, setIsLoggedIn);
      } else {window.alert("로그아웃에 실패했습니다. 새로고침 해주세요.")};
    }
  },

  /**access token 삭제, set userId null */
  handleLogout(setId:setUserId, setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    console.log("JWT 만료로 로그아웃");
    delete axios.defaults.headers.common.Authorization;
    removeCookieToken();
    setId(null);
    setUserData(null);
    setIsLoggedIn(false);
  },
};