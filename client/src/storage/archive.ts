import { atom } from "recoil";
import { v1 } from "uuid";
import { IVideoItems, IVideoItemsByCategory } from "../Types";
import { Categories } from "../Types";

/**lecture video가 sorting되어 저장됨 */
export const playlistItemState = atom<IVideoItems[] | null>({
  key:`userState/${v1()}`,
  default: null
});

export const playlistItemCatState = atom<IVideoItemsByCategory | null>({
  key:`userState/${v1()}`,
  default: null
});

export const tagList = [
  {
    num: 0,
    title: "Recent",
    value: "recent",
  },
  {
    num: 1,
    title: "A-Z",
    value: "atoz",
  },
  {
    num: 2,
    title: "자기계발",
    value: Categories.self_dev,
  },
  {
    num: 3,
    title: "인문사회",
    value: Categories.humanities_society,
  },
  {
    num: 4,
    title: "문화예술",
    value: Categories.culture_art,
  },
  {
    num: 5,
    title: "과학기술",
    value: Categories.science_tech,
  },
  {
    num: 6,
    title: "활동기록",
    value: Categories.activity,
  },
  {
    num:7,
    title: "검색",
    value: "search"
  }
];