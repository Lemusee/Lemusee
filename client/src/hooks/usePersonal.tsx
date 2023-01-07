import { useRecoilState, useSetRecoilState } from "recoil";
import { lemuseeClient as axios } from "../api/axios";
import { isAdmin } from "../storage/common";
import { myPersonalDataAtom } from "../storage/user";
import { IPersonal, IPersonalAxios } from "../Types";
import useAuthAPI from "./useAuthAPI";

const usePersonal = () => {
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  const {getMyPersonalData} = useAuthAPI();
  
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
    // const {
    //   data: {code}
    // } = await axios.patch('members/profile', changedData);

    if (code === 1000) {
      getMyPersonalData();
      window.alert("프로필 정보 변경에 성공했습니다.");
    };
    if (code !== 1000) {
      throw new Error(code);
    };
  };
  
  
  
  return {
    axiosGetPersonal,
    axiosPatchProfile,
  };
};

export default usePersonal;