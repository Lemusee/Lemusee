import moment from "moment";
import { Cookies, useCookies } from "react-cookie";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";

const cookies = new Cookies();

export const setCookieToken = (accessToken:string) => {
  const today = new Date();
  const expireDate = today.setDate(Date.now() + JWT_EXPIRE_TIMEOUT*1000);
  
  return cookies.set('accessToken', accessToken, { 
      sameSite: 'strict', 
      path: "/", 
      expires: new Date(expireDate),
      // httpOnly: true,
  });
};

export const getCookieToken = () => {
  return cookies.get('accessToken');
};

export const removeCookieToken = () => {
  return cookies.remove('accessToken', { sameSite: 'strict', path: "/" })
};

// const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

// export const setCookieToken = (accessToken:string) => {
//   const today = new Date();
//   const expireDate = moment(today).add(30, 'm').toDate();

//   setCookie(
//     'access_token',
//     accessToken,
//     {
//       sameSite: 'strict',
//       path: '/',
//       expires: expireDate,
//     }
//   )
// }

// export const getCookieToken = () => {
//   console.log(cookies.access_token);
//   return cookies.access_token;
// };

// export const removeCookieToken = () => {
//   removeCookie('access_token');
// };