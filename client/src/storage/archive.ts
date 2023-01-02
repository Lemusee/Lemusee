import { atom } from "recoil";
import { v1 } from "uuid";
import { IVideoItems, IVideoItemsByCategory } from "../Types";

/**lecture video가 sorting되어 저장됨 */
export const playlistItemState = atom<IVideoItems[] | null>({
  key:`userState/${v1()}`,
  default: null
});

export const playlistItemCatState = atom<IVideoItemsByCategory | null>({
  key:`userState/${v1()}`,
  default: null
});