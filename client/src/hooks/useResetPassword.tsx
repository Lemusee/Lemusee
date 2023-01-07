import { useNavigate } from "react-router-dom";
import { authAPI } from "../api/auth";
import { getCookieToken, removeCookieToken } from "../storage/accesCookie";

const useResetPassword = () => {
  const navigate = useNavigate();

  const authrResetPassword = async (newPassword:string) => {
    const email = getCookieToken('email');
    const code = await authAPI.axiosPatchPasswordReset({email:email, newPassword:newPassword});
    if (code === 1000) {
      removeCookieToken('email');
      let exit = window.confirm("비밀번호 변경이 완료되었습니다. 로그인하시겠습니까?");
      if (exit) navigate('/members/login', {replace: true});
      if (!exit) navigate('/', {replace:true});
    }
    if (code !== 1000) {
      removeCookieToken('email');
      navigate('/', {replace:true});
    };
  };

  return {
    authrResetPassword,

  }
};

export default useResetPassword;