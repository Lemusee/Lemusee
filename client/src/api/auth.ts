import { IJoinBody, IMemberLoginForm, IPasswordResetBody, ISignupBody } from "../Types";
import { lemuseeClient as axios } from "./axios";
import { setUserId } from "../Types/api";
import { userAPI } from "./users";

export const JWT_EXPIRE_TIMEOUT = 20*60; //20분

export const authAPI = (() => {
  /**이메일 중복체크 api, email을 받아 중복인지 여부를 체크 */
  const axiosGetEmailDupCheck = async (email:string) => {
    const { 
      data: { code }, 
    } = await axios.get(`/auth/email?email=${email}`);
  
    if (code !== 1000) {
      throw new Error(code);
    };
  };

  /**이메일 존재 여부 검증 api, email을 받아 회원 정보가 존재하는 지 여부를 체크 */
  const axiosGetEmailExist = async (email:string) => {
    const { 
      data: { code }, 
    } = await axios.get(`/auth/email/existence?email=${email}`);
  
    if (code !== 1000) {
      throw new Error(code);
    }
  };
  
  /**일반 로그인 api, 이메일과 비밀번호, isAuto:boolean을 받아 Access token과 userId를 반환 */
  const axiosPostLogin = async (signupData:ISignupBody) => {
    const { 
      data: { code }, 
    } = await axios.post(`/auth/login${signupData.isAuto ? "/auto" : ""}`, {"email":signupData.email, "password":signupData.password});
  
    if (code !== 1000) {
      throw new Error(code);
    }
  };

  /**회원가입 api, 개인정보를 받아 header에 담아 전송, response로 성공 여부 반환*/
  const axiosPostJoin = async (joinData :IJoinBody) => {
    const { 
      data: { code }, 
    } = await axios.post(`/auth/join`, joinData);
  
    if (code !== 1000) {
      throw new Error(code);
    }
  };

  /**비밀번호 재설정 api, email과 새 비밀번호를 받아 새 회원정보 업데이트 */
  const axiosPatchPasswordReset = async ({email, newPassword}:IPasswordResetBody) => {
    const { 
      data: { code }, 
    } = await axios.patch(`/auth/password`, JSON.stringify({email:email, newPassword:newPassword}));
  
    if (code !== 1000) {
      throw new Error(code);
    }
  };

  /**access token이 만료된 경우 refresh token이 유효한 경우 access token 재발급, 그렇지 않은 경우 로그아웃 처리 */
  const silentRefreshToken = async (setId:setUserId) => {
    const { 
      data: { code, result }, 
    } = await axios.post(`/auth/jwt`);
    
    /**refresh token이 유효한 경우, access token 재발급 */
    if (code === 1000) {
      handleLogin(result.accessToken, setId, result.userId);
      return;
    };

    if (code !== 1000) {
      window.alert('로그인 토큰이 만료되었습니다.');
    }
    userAPI.handleLogout(setId);
  };

  const handleLogin = (
    accessToken: string,
    setId : setUserId,
    userId: number,
  ) => {
    axios.defaults.headers.common.Authorization = accessToken;
    setId(userId);
    
    setTimeout(
      () => silentRefreshToken(setId),
      JWT_EXPIRE_TIMEOUT*1000,
    )
  };

  return {
    silentRefreshToken,
    axiosGetEmailDupCheck,
    axiosGetEmailExist,
    axiosPostLogin,
    axiosPostJoin,
    axiosPatchPasswordReset,
    handleLogin
  };
})();







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


export const axiosLogin = async (resultForm:any) => {
  console.log("data", resultForm);
  if (resultForm) {
    try {
      const {data} = await axios.post(`/auth/login${resultForm.autoLogin ? "/auto" : ""}`, {"email":resultForm.email, "password":resultForm.password});
      return data;
    } catch (error) {
      console.log(error);
    };
  };
};