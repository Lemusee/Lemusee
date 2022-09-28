import { atom } from "recoil";

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