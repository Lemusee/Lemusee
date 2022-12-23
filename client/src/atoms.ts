import { atom } from "recoil";
import {v1} from "uuid";
import {IVideoItems, Categories} from "./Types";

// export enum Categories {
//   "self_dev"="self_dev",
//   "culture_art"="culture_art",
//   "humanities_society"="humanities_society",
//   "science_tech"="science_tech",
//   "activity"="activity",
//   "etc"="etc",
// };

export enum Teams {
  "curator" = "curator",
  "contents" = "contents",
  "culture"= "culture",
  "admin" = "admin"
};

export enum Certification {
  "활동"=0,
  "비활동"=1,
  "졸업"=2,
  "미정"=3,
};

//======================================

export const isDarkThemeAtom = atom(
  {
    key:`userState/${v1()}`,
    default:false,
  }
);

export const isLoggedInAtom = atom({
  key:`userState/${v1()}`,
  default:false,
});

export const myUserIdAtom = atom<number>({
  key:`userState/${v1()}`,
  default: -1, //임시로 지정된 userId
});

export const isLoadingAtom = atom({
  key:`userState/${v1()}`,
  default: false,
});

export const isAdmin = atom({
  key:`userState/${v1()}`,
  default: false,
});

export const isRecruitmentAtom = atom({
  key:`userState/${v1()}`,
  default: false,
});

interface IThumnails {
  url:string;
  width:number;
  height:number;
};

// export interface IVideoItems {
//   id: string;
//   playlistId : string;
//   publishedAt : string;
//   title: string;
//   description: string;
//   thumnailUrl: string | undefined;
//   videoURL: string;
//   category: Categories;
// };

export const categoryState = atom<Categories>({
  key:`userState/${v1()}`,
  default: Categories.etc,
});

export const playlistItemState = atom<IVideoItems[]>({
  key:`userState/${v1()}`,
  default: []
});

export interface IChannelInfo {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  thumnails: IThumnails;
  statistics: {
      viewCount: string;
      subscriberCount: string;
      videoCount: string;
  };
};

export const channelState = atom<IChannelInfo[]>({
  key:`userState/${v1()}`,
  default: []
});

export interface ICurationInfo {
  cardNum: number;
  title: string;
  contents:string;
  imgUrl:string;
};

export const curationState = atom<ICurationInfo[]>({
  key:`userState/${v1()}`,
  default:[],
});

export interface IRecruitment {
  recruitment_link?:string;
  inquiry?:string;
  due_at?:string;
  content?:string;
};

export const recruitmentInfoAtom = atom<IRecruitment>({
  key:`userState/${v1()}`,
  default: {},
});

export interface ICategories {
  title?:string;
  subtitle:{
      name?:string;
      index:number;
    }[]
};

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

//admin Atoms

export interface IAdminFileUploadereAtom {
  imgFile?: File;
};

export const adminExecutiveAtom = atom<IAdminFileUploadereAtom[]>({
  key:`userState/${v1()}`,
  default: []
});

export const adminCurationFileAtom = atom<IAdminFileUploadereAtom[]>({
  key:`userState/${v1()}`,
  default: []
});

export interface IAdminCurationAtom {
  cardNum?: number;
  title?: string;
  contents?: string;
  imgUrl?: string;
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

