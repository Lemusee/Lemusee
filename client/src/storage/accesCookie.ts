import { Cookies } from "react-cookie";
import { JWT_EXPIRE_TIMEOUT } from "../api/auth";

const cookies = new Cookies();

export const setCookieToken = (accessToken:string) => {
  const today = new Date();
  const expireDate = today.setDate(Date.now() + JWT_EXPIRE_TIMEOUT*1000);
  
  return cookies.set('accessToken', accessToken, { 
      sameSite: 'strict', 
      path: "/", 
      // expires: new Date(expireDate),
      // httpOnly: true,
  });
};

export const setCookie = (name:string, key:string) => {
  const today = new Date();
  const expireDate = today.setDate(Date.now() + (5*60)*1000);//5분
  
  return cookies.set(name, key, { 
    sameSite: 'strict', 
    path: "/", 
    expires: new Date(expireDate),
});
}

export const getCookieToken = (key:string) => {
  return cookies.get(key);
};

export const removeCookieToken = (key:string) => {
  return cookies.remove(key, { sameSite: 'strict', path: "/" })
};