import { atom } from "recoil";
import { v1 } from "uuid";

export const resetPasswordEmailAtom = atom<string | undefined>({
  key:`userState/${v1()}`,
  default: "",
})