import { lemuseeClient as axios } from "./axios";
import { setIsLoggedIn, setUserData, setUserId } from "../Types/api";
import { IPersonal } from "../Types";

export const userAPI = {

  async axiosPatchProfile (personalData:IPersonal) {
    const {
      data: {code, result},
    } = await axios.patch(`/users/profile`, personalData);

    if (code !== 1000) {
      throw new Error(code);
    };

    return result;
  },

  /**내 프로필 조회 api, access token을 받아 user data를 조회 */
  async axiosGetMyProfile () {
    const {
      data: {code, result},
    } = await axios.get(`/users`);

    if (code !== 1000) {
      throw new Error(code);
    };

    return result;
  },

  /**w전체 프로필 조회 api, access token을 받아 admin인지 확인하고 전체 프로필 데이터를 반환 */
  async axiosGetAllProfile () {
    const {
      data: {code, result},
    } = await axios.get(`/users/all`);

    if (code !== 1000) {
      throw new Error(code);
    };

    return result;
  },

  /**logout patch, token 삭제, set userId null */
  async axiosPatchLogout (setId:setUserId, setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    const {
      data: { code },
    } = await axios.patch(`/users/logout`);

    if (code === 1000) {
      this.handleLogout(setId,setUserData,setIsLoggedIn);
    }
  },

  /**access token 삭제, set userId null */
  handleLogout(setId:setUserId, setUserData:setUserData, setIsLoggedIn:setIsLoggedIn) {
    delete axios.defaults.headers.common.Authorization;
    setId(null);
    setUserData(null);
    setIsLoggedIn(false);
    
  },
};