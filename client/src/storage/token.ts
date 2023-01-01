import { atom } from "recoil";
import { SetterOrUpdater } from "recoil";
import { removeCookieToken, setCookieToken } from "./accesCookie";

export const TOKEN_TIME_OUT = 1800*1000; //30분

export interface IAccessToken {
  authenticated: boolean;
  accessToken: string | null;
  expireTime: number | null;
};

export const authAtom = atom<IAccessToken>({
  key: 'authToken',
  // get initial state from local storage to enable user to stay logged in
  default: {
    authenticated: false,
    accessToken: null,
    expireTime: null
  }
});

type SetRecoilAtom = SetterOrUpdater<IAccessToken>;

export interface ISetToken {
  payload: string;
  setRecoil: SetRecoilAtom;
};

export const setToken = (payload:string) => {
  // const tokenState:IAccessToken = {
  //   authenticated: true,
  //   accessToken: payload,
  //   expireTime: new Date().getTime() + TOKEN_TIME_OUT
  // };
  setCookieToken(payload);
};
// import { authAtom, setToken } from './storage/Auth';
// const [tokenRecoil, setTokenRecoil] = useRecoilState(authAtom);
// setToken({payload:"payload", setRecoil:setTokenRecoil});

export interface IDeleteToken {
  setRecoil: SetRecoilAtom;
};

export const deleteToken = () => {
  // const tokenState:IAccessToken = {
  //   authenticated: false,
  //   accessToken: null,
  //   expireTime: null
  // };
  removeCookieToken();
};

// import { authAtom, deleteToken } from './storage/Auth';
// const [tokenRecoil, setTokenRecoil] = useRecoilState(authAtom);
// deleteToken({payload:"payload", setRecoil:setTokenRecoil});