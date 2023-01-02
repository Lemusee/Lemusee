import { atom } from "recoil";
import { v1 } from "uuid";
import { IHomeCurationSorted, IHomeExecutivesInfo } from "../Types";

export const curationState = atom<IHomeCurationSorted[]>({
  key:`userState/${v1()}`,
  default:[],
});

export const executiveState = atom<IHomeExecutivesInfo>({
  key:`userState/${v1()}`,
  default:{
    imgUrl: "",
    leaders: {}
  },
});