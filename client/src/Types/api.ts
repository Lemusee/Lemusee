import { SetterOrUpdater } from "recoil";
import { IPersonal } from "../Types";

export type setUserId = SetterOrUpdater<number | null>;

export type setUserData = SetterOrUpdater<IPersonal | null>;

export type setIsLoggedIn = SetterOrUpdater<boolean>;