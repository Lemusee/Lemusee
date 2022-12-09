import { atom } from "recoil";

export enum Categories {
  "self_dev"="self_dev",
  "culture_art"="culture_art",
  "humanities_society"="humanities_society",
  "science_tech"="science_tech",
  "activity"="activity",
  "etc"="etc",
};

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
    key:"isDark",
    default:false,
  }
);

export const isLoggedInAtom = atom({
  key:"isLogedIn",
  default:false,
});

export const myUserIdAtom = atom<number>({
  key:"myUserId",
  default: 8, //임시로 지정된 userId
});

export const isLoadingAtom = atom({
  key: "isLoading",
  default: false,
});

export const isAdmin = atom({
  key: "isAdmin",
  default: false,
});

export const isRecruitmentAtom = atom({
  key: "isRecruitment",
  default: false,
});

interface IThumnails {
  url:string;
  width:number;
  height:number;
};

export interface IVideoItems {
  id: string;
  playlistId : string;
  publishedAt : string;
  title: string;
  description: string;
  thumnailUrl: string | undefined;
  videoURL: string;
  category: Categories;
};

export const categoryState = atom<Categories>({
  key:"category",
  default: Categories.etc,
});

export const playlistItemState = atom<IVideoItems[]>({
  key:"videoItem",
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
  key: "channelInfo",
  default: []
});

export interface ICurationInfo {
  cardNum: number;
  title: string;
  contents:string;
  imgUrl:string;
};

export const curationState = atom<ICurationInfo[]>({
  key: "curationInfo",
  default:[],
});

export interface IRecruitment {
  recruitment_link?:string;
  inquiry?:string;
  due_at?:string;
  content?:string;
};

export const recruitmentInfoAtom = atom<IRecruitment>({
  key: "recruitmentInfo",
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
  key: "communityCategoryState",
  default: []
});

export const communityPageIndex = atom<number>({
  key:"communityPageIndex",
  default:0,
});

export const communityCategoryTitleAtom = atom<string>({
  key: "communityCategoryTitleAtom",
  default: "",
});

export const communityCategorySubTitleAtom = atom<string>({
  key: "communityCategorySubTitleAtom",
  default: "",
});

export const communitypagenationIndex = atom<number>({
  key:"communitypagenationIndex",
  default:1,
});

export const contentTitleAtom = atom<string>({
  key:"contentTitle",
  default:"",
});

export const newContentTitleAtom = atom<string>({
  key:"newContentTitle",
  default:""
});

export const commentOpenAtom = atom<boolean>({
  key:"commentOpen",
  default: false,
});

export interface IAdminCurationAtom {
  cardNum?: number;
  title?: string;
  contents?: string;
  imgUrl?: string;
};

export const adminCurationAtom = atom<IAdminCurationAtom[]>({
  key: "adminCurationAtom",
  default: []
});