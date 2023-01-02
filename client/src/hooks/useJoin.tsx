import { join } from "path";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../api/auth";
import { IJoinBody } from "../Types";


const useJoin = () => {
  const navigate = useNavigate();
  /**exailDupCheck 후 회원가입 */
  const handleJoin = async (
    joinData :IJoinBody
  ) => {
    const code = await authAPI.axiosGetEmailDupCheck(joinData.email);
    if (code === 2017) {
      window.alert("이미 존재하는 계정입니다.");
        navigate('/members/signup1');
    };
    if (code !== 1000) throw new Error(code);
    if (code === 1000) {
      authAPI.axiosPostJoin(joinData).then(
        res => {
          if (res === 1000) {
            let tologin = window.confirm("회원가입 되었습니다. 로그인 하시겠습니까?")
            if (tologin) navigate('/members/login');
          }
          else {
            window.alert("회원가입에 실패했습니다.");
            navigate('/members/signup1');
          }
          });
      };
  };

  return {
    handleJoin,
  };
};

export default useJoin;