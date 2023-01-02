import { atom } from "recoil";
import {v1} from "uuid";

export const adminExecutiveAtom = atom<(File | string)[]>({
  key:`userState/${v1()}`,
  default: []
});

export const adminCurationFileAtom = atom<(File | string)[]>({
  key:`userState/${v1()}`,
  default: []
});

export interface IAdminCurationAtom {
  cardNum?: number;
  title?: string;
  contents?: string;
  imgData?: any;
};

export const adminCurationAtom = atom<IAdminCurationAtom[]>({
  key:`userState/${v1()}`,
  default: []
});

export interface IAdminRecruitingAtom {
  recruitment_link?: string;
  inquiry?: string;
  due_at?: string;
  content?: string;
};

export const adminRecruitingAtom = atom<IAdminRecruitingAtom>({
  key:`userState/${v1()}`,
  default: {},
});

export interface IAdminMember {
  id: number;
  nickname: string;
  role: string;
  team: string | null;
  isChief: boolean;
};

export interface IAdminMemberState {
  [key: string]: IAdminMember[];
};

export const adminMemberStateAtom = atom<IAdminMemberState>({
  key:`userState/${v1()}`,
  default: {
    "등록 대기": [],
    "비활동 회원": [],
    "큐레이터": [],
    "컨텐츠 팀장": [],
    "컬처 팀장": [],
    "어드민 팀장": [],
    "큐레이터 팀": [],
    "컨텐츠 팀": [],
    "컬처 팀": [],
    "어드민 팀": []
  },
});

export const adminMemberStateChangesAtom = atom<(string | undefined)[]>({
  key: `userState/${v1()}`,
  default: []
});
