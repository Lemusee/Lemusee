import { SetterOrUpdater } from "recoil";

export enum Categories {
  "self_dev"="self_dev",
  "culture_art"="culture_art",
  "humanities_society"="humanities_society",
  "science_tech"="science_tech",
  "activity"="activity",
  "etc"="etc",
};

//api post & put

export interface IJoinBody {
  nickname: string;
  email: string;
  password: string;
};

export interface ISignupBody {
  email: string;
  password: string;
  isAuto?: boolean;
};

export interface IPasswordResetBody {
  email?:string;
  newPassword?:string;
  oldPassword?:string;
};

//Recruitment
export interface IRecruitment {
  recruitment_link?:string;
  inquiry?:string;
  due_at?:string;
  content?:string;
};

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

export interface ICommentForm {
  extraError: string;
  comment?: string;
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
  imgData?: any;
};

export interface IImgUrl {
  imgurl?:string;
  grayscale?:number;
};

type SetRecoilAtom = SetterOrUpdater<(File | string)[]>;

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

export interface IChangesTracker {
  changelist?:ITrackerItem[];
};

export interface ITrackerItem {
  title: string;
  changes: any[];
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

export interface IVideoItems {
  playlistId : string;
  publishedAt : string;
  id: string;
  title: string;
  description: string;
  thumnailUrl: string | undefined;
  videoURL: string;
  category: Categories;
};

export interface IVideoItemsByCategory {
  [key:string]: IVideoItems[];
};

export interface IThumnailUrl {
  thumnailUrl?:string;
};

export interface ISearchFocus {
  focus?:boolean;
};

export interface ISearchTag {
  focus:boolean;
  onClickFunc:()=>void;
};


//Home

export interface IHomeCurationSorted {
  cardNum: number;
  title: string;
  contents: string;
  imgUrl: string;
};

export interface IHomeCurationListCardInfo {
  title?:string;
  contents?:string;
  imgUrl?:string;
  cardNum?:number;
  focus?:number;
  onClick?:() => void;
};

export interface IHomeImgUrl {
  imgUrl:string;
};

export interface IHomeCurationCardBackgroundImg {
  imgUrl?:string;
  focus?:boolean | false;
};

export interface IHomeCurationFocus {
  focus?:boolean | false;
};

export interface IHomeRecentCardData {
  title:string;
  content?:string;
  category:Categories;
  videoUrl?:string;
};

export interface IHomeTeamCard {
  title:string;
  imgUrl:string;
  content:string;
};

export interface IHomeTeamData {
  title : string;
  routerUrl : string;
  imgUrl : string;
  content : string;
};

export interface IHomeExecutivesInfo {
  imgUrl: string;
  leaders: {[key:string]: string};
}

//Member

export interface IMemberPersonalData {
  id?:number;
  nickname?:string;
  team?: string;
  role?: string;
  isChief?: boolean;
};

//Member Forms
export interface IMemberFindAccountForm {
  extraError: string;
  email?:string;
};

export interface IMemberLoginForm {
  extraError: string;
  email: string;
  password: string;
  autoLogin: boolean;
};

export interface IMemberResetPWForm {
  extraError: string;
  password?: string;
  passwordConfirm?:string;
};

export interface IMemberSignupForm {
  extraError: string;
  username: string;
  email:string;
  password: string;
  passwordConfirm:string;
};

export interface IMemberSignupDetailForm {
  extraError: string;
  birthday?: number;
  phone?:string;
  department?:string;
  studentNum?:string;
};

//Personal

export interface IPersonal {
  userId: number;
  email: string;
  nickname: string;
  birthYear?: string;
  department?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
  team?: string;
  isChief?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export interface IPersonalAxios {
  nickname?:string;
  birthYear?: string;
  department?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
};

export interface IPersonalTeam {
  [key:string]: string;
};

export interface IPersonalAdjustmentForm {
  extraError: string;
  email: string;
  nickname: string;
  birthYear?: string;
  department?: string;
  phone?: string;
  studentId?: string;
  introduce?: string;
};

export interface IPersonalResponsiveInputWidth {
  width?:number;
};

//Player

export interface IPlayerComments {
  username?:string;
  createdAt?:string;
  content?:string;
  writtenByUser?:boolean;
};