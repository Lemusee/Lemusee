import { SetterOrUpdater } from "recoil";
import { IAdminFileUploadereAtom } from "./atoms";

//Community Page
export interface ICategoriesData {
  title?:string;
  index?:number;
};

export interface ICategories {
  title?:string;
  subtitle:{
      name?:string;
      index:number;
    }[]
};

export interface IisSelected {
  isSelected?:boolean;
};

export interface IisMine {
  isMine: boolean;
}

export interface IComment {
  id: number;
  userId : number;
  writer : string;
  content : string;
  updatedAt : string;
};

export interface IContent {
  id: number;
  communityTitleId: string;
  title: string;
  updatedAt: string;
  userId: number;
  writer: string;
  content: string;
  comments: IComment[];
};

type ParamsMatchType = {
  [index: string]: number;
};

export const CommunityParamsMatch:ParamsMatchType = {
  all_rule:0,
  all_account:1,
  all_form:2,
  notice:3,
  electionCommittee_notice:4,
  electionCommittee_pledge:5,
  curator_notice:6,
  curator_proceedings:7,
  curator_ref:8,
  contents_notice:9,
  contents_proceedings:10,
  contents_ref:11,
  culture_notice:12,
  culture_proceedings:13,
  culture_ref:14,
  admin_notice:15,
  admin_proceedings:16,
  admin_ref:17,
  freeBoard_free:18,
  freeBoard_group:19,
  freeBoard_excuse:20,
};

export interface ICommunityListItem {
    id: number;
    title : string;
    preview : string;
    writer : string;
    updatedAt : string;
};


//Admin Page

export interface IAdminChaptorTitle {
  title?:string;
  subtitle?:string;
};

export interface ICurationItemForm {
  extraError: string;
  title?: string;
  contents?: string;
  imgUrl?:string;
};

export interface ICurationItemData {
  index:number;
  cardNum?: number;
  title?: string;
  contents?: string;
  imgUrl?: string;
};

export interface IImgUrl {
  imgurl?:string;
  grayscale?:number;
};

type SetRecoilAtom = SetterOrUpdater<IAdminFileUploadereAtom[]>;

export interface IImgFileUpLoaderPlaceholder {
  imgUrlPlaceholder?: string;
  grayscale?:number;
  setRecoil: SetRecoilAtom;
};

export interface IVisitorInfoData {
  visitorThisMonth?: number;
  visitorThisWeek?: number;
  visitorThisDay?: number;
  visitorAccumulated?: number;
};

export interface IMemberInfoData {
  memberActiveThisSemester?: number;
  memberInactive?: number;
  memberGraduated?: number;
  memberTotal?: number;
};

export interface IRecruitingForm {
  extraError: string;
  recruitment_link?: string;
  inquiry?: string;
  due_at?:string;
  content?: string;
};

//Admin Drag&Drops
export interface IAreaProps {
  isDraggingOver:boolean;
  isDraggingFromThis:boolean;
};

export interface IAdminMember {
  id: number;
  nickname: string;
  role: string;
  team: string | null;
  isChief: boolean;
};

export interface IBoardProps {
  items:IAdminMember[];
  boardId: string;
};

export interface IDraggableCardProps {
  itemId:number;
  itemText:string;
  index:number;
  boardId:string;
};

//Archieve
