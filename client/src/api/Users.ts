import axios from "axios";
import { BASE_URL } from "./base_url";

/**프로필 조회 api, userId와 access token을 받아 프로필을 조회 */
export const axiosGetProfile = async (accessToken:string, userId:number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users:${userId}`, {params:accessToken});
    return data;
  } catch (error) {
    console.log(error)
  };
};

/**w전체 프로필 조회 api, access token을 받아 admin인지 확인하고 전체 프로필 데이터를 반환 */
export const axiosGetAllProfile = async (accessToken:string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/users/all`, {params:accessToken});
    return data;
  } catch (error) {
    console.log(error)
  };
};

/**유저 삭제 api, access token과 userId를 받아 해당 유저를 회원 리스트에서 삭제 */
export const axiosPatchUserDelete = async (accessToken:string, userId:number) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/users/status`, JSON.stringify({userId:userId, accessToken:accessToken}));
    return data;
  } catch (error) {
    console.log(error)
  };
};

/**로그아웃 api, access token을 받아 로그아웃 처리*/
export const axiosPatchLogout = async (accessToken:string) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/users/logout`, JSON.stringify(accessToken));
    return data;
  } catch (error) {
    console.log(error)
  };
};


