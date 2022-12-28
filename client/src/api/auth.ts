import axios from "axios";
import { IJoinBody, IPasswordResetBody, ISignupBody } from "../Types";
import { BASE_URL } from "./base_url";


//======youtube Item apis

// import dotenv from "dotenv";
// dotenv.config({ path: "../.env", encoding: "utf8" });

// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
// const API_KEY = `AIzaSyBTRV2lZH0H0p-r4MRdDIW8NBpF-2ruSrw`;

// const BASE_URL = `https://www.googleapis.com/youtube/v3`
// const CHANNEL_ID = `UCGagrr6S5Q8dGXkxnT-ScmA`;
// const playlistIDs = {
//   PLAYLIST_SELF_ID : `PLUxiW-oLdlowhJ0--Q3qm85e_ob85O7Pd`,
//   PLAYLIST_CULTURE_ID : `PLUxiW-oLdloyMVkEatxjriCa_ebmihgRX`,
//   PLAYLIST_SOCIETY_ID : `PLUxiW-oLdlowIfhNXnjXe7CZRbr2_09PP`,
//   PLAYLIST_SCIENCE_ID : `PLUxiW-oLdloxf1adb5EaS5UosufnEUaRL`,
//   PLAYLIST_ACTIVITY_ID : `PLUxiW-oLdlowtNuQjr1II556i7wiIaeWs`,
// };

// export function fetchChannelInfo(){
//   return fetch(`${BASE_URL}/chennels?key=${API_KEY}&id=${CHANNEL_ID}&part=snippet,contentDetails,statistics`).then(response => response.json());
// };

// export function fetchActivityItem(){
//   return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_ACTIVITY_ID}&key=${API_KEY}`).then(response => response.json());
// };
// export function fetchSelfItem(){
//   return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SELF_ID}&key=${API_KEY}`).then(response => response.json());
// };
// export function fetchCultureItem(){
//   return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_CULTURE_ID}&key=${API_KEY}`).then(response => response.json());
// };
// export function fetchSocietyItem(){
//   return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SOCIETY_ID}&key=${API_KEY}`).then(response => response.json());
// };
// export function fetchScienceItem(){
//   return fetch(`${BASE_URL}/playlistItems?part=snippet&maxResults=50&status=&playlistId=${playlistIDs.PLAYLIST_SCIENCE_ID}&key=${API_KEY}`).then(response => response.json());
// };

// export function fetchVideoDetail(VIDEO_ID:string){
//   return fetch(`${BASE_URL}/videos?part=snippet&status=&id=${VIDEO_ID}&key=${API_KEY}`);
// }

//=========================

/**회원가입 api, 개인정보를 받아 header에 담아 전송, response로 성공 여부 반환*/
export const axiosPostJoin = async (joinData :IJoinBody) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/join`, JSON.stringify(joinData));
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**일반 로그인 api, 이메일과 비밀번호를 받아 Access token과 userId를 반환 */
export const axiosPostSignup = async (signData :ISignupBody) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup`, JSON.stringify(signData));
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**자동 로그인 api, 이메일과 비밀번호를 받아 Access token과 userId를 반환하고 Refresh token을 쿠키에 저장해줌(서버) */
export const axiosPostSignupAuto = async (signData:ISignupBody) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/signup/auto`, JSON.stringify(signData));
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**토큰 재발급 api, refreshToken을 받아 새 access token을 반환 */
export const axiosPostJwt = async () => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/jwt`, {withCredentials: true});
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**이메일 중복체크 api, email을 받아 중복인지 여부를 체크 */
export const axiosGetEmailDupCheck = async (email:string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/auth/jwt/${email}`);
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**이메일 존재 여부 검증 api, email을 받아 회원 정보가 존재하는 지 여부를 체크 */
export const axiosGetEmailExist = async (email:string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/auth/email/existence?email=${email}`);
    return data;
  } catch (error) {
    console.log(error);
  };
};

/**비밀번호 재설정 api, email과 새 비밀번호를 받아 새 회원정보 업데이트 */
export const axiosPatchPasswordReset =async ({email, newPassword}:IPasswordResetBody) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/auth/password`, JSON.stringify({email:email, newPassword:newPassword}));
    return data;
  } catch (error) {
    console.log(error);
  };
};



// //test codes
// const BASE_URL1 = `https://api.coinpaprika.com/v1`

// export function fetchCoins(){
//   return fetch(`${BASE_URL1}/coins`).then(response => response.json());
// };

// export const axiosCoins = async () => {
// try {
//   const { data } = await axios.get(`${BASE_URL1}/coins`);
//   return data;
//   } catch (error) {
//     console.log(error);
//   };
// };