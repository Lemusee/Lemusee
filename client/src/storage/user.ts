import { atom } from "recoil";
import { v1 } from "uuid";
import { IMemberPersonalData, IPersonal } from "../Types";

/**userId storage */
export const myUserIdAtom = atom<number | null>({
  key:`userState/${v1()}`,
  default: null,
});

/**유저 개인정보 */
export const myPersonalDataAtom = atom<IPersonal | null>({
  key:`userState/${v1()}`,
  default: null
});