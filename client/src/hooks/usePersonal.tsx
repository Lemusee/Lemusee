import { useRecoilState, useSetRecoilState } from "recoil";
import { lemuseeClient as axios } from "../api/axios";
import { isAdmin } from "../storage/common";
import { myPersonalDataAtom } from "../storage/user";
import { IPersonal } from "../Types";

const usePersonal = () => {
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  
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

  const axiosPostProfile =async (changedData:IPersonal) => {
    const {
      data: {code, result}
    } = await axios.post('members/profile', changedData);

    if (code === 1000) {
      setUserData(result);
    }
    if (code !== 1000) {
      throw new Error(code);
    }
  }
  
  
  
  return {
    axiosGetPersonal,
    axiosPostProfile
  };
};

export default usePersonal;