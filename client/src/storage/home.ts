import { atom } from "recoil";
import { v1 } from "uuid";
import { IHomeCurationSorted } from "../Types";

export const curationState = atom<IHomeCurationSorted[]>({
  key:`userState/${v1()}`,
  default:[],
});