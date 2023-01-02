import { atom } from "recoil";
import { v1 } from "uuid";
import { IRecruitment } from "../Types";

/**Dark(true) & Light(false) Theme */
export const isDarkThemeAtom = atom(
  {
    key:`userState/${v1()}`,
    default:false,
  }
);

/**true 인 경우 로그인 상태 : 자동 로그인 토큰 존재 or 로그인 response succes 시 */
export const isLoggedInAtom = atom({
  key:`userState/${v1()}`,
  default:false,
});

/**isLoading(true) or not(false) */
export const isLoadingAtom = atom({
  key:`userState/${v1()}`,
  default: false,
});

/**get admin access by response */
export const isAdmin = atom({
  key:`userState/${v1()}`,
  default: false,
});

/**모집 여부 => Home Recruiting Banner에 반영 */
export const isRecruitmentAtom = atom({
  key:`userState/${v1()}`,
  default: false,
});

/**recruitment data store */
export const recruitmentInfoAtom = atom<IRecruitment>({
  key:`userState/${v1()}`,
  default: {},
});