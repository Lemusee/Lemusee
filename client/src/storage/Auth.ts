import { atom, RecoilState, useRecoilState, useSetRecoilState } from "recoil";
import { SetterOrUpdater } from "recoil";

export const TOKEN_TIME_OUT = 1800*1000; //30분

export interface IAuthToken {
  authenticated: boolean;
  accessToken: string | null;
  expireTime: number | null;
};

export const authAtom = atom<IAuthToken>({
  key: 'authToken',
  // get initial state from local storage to enable user to stay logged in
  default: {
    authenticated: false,
    accessToken: null,
    expireTime: null
  }
});

type SetRecoilAtom = SetterOrUpdater<IAuthToken>;

export interface ISetToken {
  payload: string;
  setRecoil: SetRecoilAtom;
};

export const setToken = ({payload, setRecoil}:ISetToken) => {
  const tokenState:IAuthToken = {
    authenticated: true,
    accessToken: payload,
    expireTime: new Date().getTime() + TOKEN_TIME_OUT
  };
  setRecoil(tokenState);
};
// import { authAtom, setToken } from './storage/Auth';
// const [tokenRecoil, setTokenRecoil] = useRecoilState(authAtom);
// setToken({payload:"payload", setRecoil:setTokenRecoil});

export interface IDeleteToken {
  setRecoil: SetRecoilAtom;
};

export const deleteToken = ({setRecoil}:IDeleteToken) => {
  const tokenState:IAuthToken = {
    authenticated: false,
    accessToken: null,
    expireTime: null
  };
  setRecoil(tokenState);
};

// import { authAtom, deleteToken } from './storage/Auth';
// const [tokenRecoil, setTokenRecoil] = useRecoilState(authAtom);
// deleteToken({payload:"payload", setRecoil:setTokenRecoil});