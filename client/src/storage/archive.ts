import { atom } from "recoil";
import { v1 } from "uuid";
import { IVideoItems } from "../Types";

/**lecture video가 sorting되어 저장됨 */
export const playlistItemState = atom<IVideoItems[]>({
  key:`userState/${v1()}`,
  default: []
});