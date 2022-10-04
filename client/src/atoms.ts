import { NONAME } from "dns";
import { atom } from "recoil";

export enum Categories {
  "self_dev"="self_dev",
  "culture_art"="culture_art",
  "humanities_society"="humanities_society",
  "science_tech"="science_tech",
  "activity"="activity",
  "etc"="etc",
}

export enum Teams {
  "curator" = "curator",
  "contents" = "contents",
  "culture"= "culture",
  "admin" = "admin"
}

export const isDarkThemeAtom = atom(
  {
    key:"isDark",
    default:false,
  }
)

export const isLogedInAtom = atom({
  key:"isLogedIn",
  default:false,
})

export const isLoadingAtom = atom({
  key: "isLoading",
  default: false,
})

interface IThumnails {
  url:string;
  width:number;
  height:number;
}

export interface IVideoItems {
  id: string;
  playlistId : string;
  publishedAt : string;
  title: string;
  description: string;
  thumnailUrl: string | undefined;
  videoURL: string;
  category: Categories;
}

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
}

export const channelState = atom<IChannelInfo[]>({
  key: "channelInfo",
  default: []
})

export interface ICurationInfo {
  cardNum: number;
  title: string;
  contents:string;
  imgUrl:string;
}

export const curationState = atom<ICurationInfo[]>({
  key: "curationInfo",
  default:[],
})