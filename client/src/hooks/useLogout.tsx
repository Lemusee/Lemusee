import { useSetRecoilState } from "recoil";
import { isAdmin, isLoggedInAtom } from "../storage/common";
import { myPersonalDataAtom } from "../storage/user";
import { lemuseeClient as axios } from "../api/axios";
import useAuthAPI from "./useAuthAPI";
import { removeCookieToken } from "../storage/accesCookie";
import { useNavigate } from "react-router-dom";


const useLogout = () => {
  const setUserData = useSetRecoilState(myPersonalDataAtom);
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  const { silentlyRefreshAccessToken } = useAuthAPI();
  const navigate = useNavigate();

  const axiosPatchLogout = async () => {
    const {
      data: { code },
    } = await axios.post(`/members/logout`);

    if (code === 1000) {
      handleLogout();
      return;
    }
    else if (code === 2001) {
      silentlyRefreshAccessToken();
      return;
    }
    window.alert("로그아웃에 실패했습니다.");
    return;
  };
  
  const handleLogout = () => {
    delete axios.defaults.headers.common.Authorization;
    removeCookieToken();
    setUserData(null);
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate('/', {replace:true});
  }
  
  return {
    axiosPatchLogout,
  }
};

export default useLogout;