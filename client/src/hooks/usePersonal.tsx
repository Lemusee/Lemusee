import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { lemuseeClient as axios } from "../api/axios";
import { removeCookieToken } from "../storage/accesCookie";
import { isAdmin, isLoggedInAtom } from "../storage/common";
import { myPersonalDataAtom } from "../storage/user";
import { IPersonalAxios } from "../Types";
import useAuthAPI from "./useAuthAPI";

const usePersonal = () => {
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  const setIsLoggedin = useSetRecoilState(isLoggedInAtom);
  const {getMyPersonalData} = useAuthAPI();
  const navigate = useNavigate();
  
  const axiosGetPersonal = async () => {
    const {
      data : {code, result}
    } = await axios.get('members');
  
    if (code === 1000) {
      setUserData(result);
      if (result.isChief) {
        setIsAdmin(true);
      };
    };
    if (code !== 1000) {
      throw new Error(code);
    }
  };

  const axiosPatchProfile = async (changedData:IPersonalAxios) => {
    const {
      data: {code}
    } = await axios.patch(`members/profile?birthYear=${changedData.birthYear}&department=${changedData.department}&introduce=${changedData.introduce}&nickname=${changedData.nickname}&phone=${changedData.phone}&studentId=${changedData.studentId}`);

    if (code === 1000) {
      getMyPersonalData();
      window.alert("프로필 정보 변경에 성공했습니다.");
    };
    if (code !== 1000) {
      throw new Error(code);
    };
  };
  
  const axiosDeleteSecession = async () => {
    const {
      data: {code}
    } = await axios.delete('members/secession');

    if (code === 1000) {
      delete axios.defaults.headers.common.Authorization;
      removeCookieToken('accessToken');
      window.alert("탈퇴되었습니다. 홈 화면으로 돌아갑니다.");
      setIsAdmin(false);
      setUserData(null);
      setIsLoggedin(false);
      navigate('/', {replace:true});
    }
  }
  
  
  return {
    axiosGetPersonal,
    axiosPatchProfile,
    axiosDeleteSecession
  };
};

export default usePersonal;