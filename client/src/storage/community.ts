import { atom } from "recoil";
import { v1 } from "uuid";
import { ICategories } from "../Types";

export const communityCategoryState = atom<ICategories[]>({
  key:`userState/${v1()}`,
  default: []
});

export const communityPageIndex = atom<number>({
  key:`userState/${v1()}`,
  default:0,
});

export const communityCategoryTitleAtom = atom<string>({
  key:`userState/${v1()}`,
  default: "",
});

export const communityCategorySubTitleAtom = atom<string>({
  key:`userState/${v1()}`,
  default: "",
});

export const communitypagenationIndex = atom<number>({
  key:`userState/${v1()}`,
  default:1,
});

export const contentTitleAtom = atom<string>({
  key:`userState/${v1()}`,
  default:"",
});

export const newContentTitleAtom = atom<string>({
  key:`userState/${v1()}`,
  default:""
});

export const commentOpenAtom = atom<boolean>({
  key:`userState/${v1()}`,
  default: false,
});