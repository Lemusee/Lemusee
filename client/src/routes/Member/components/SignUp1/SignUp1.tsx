import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IJoinBody, IMemberSignupForm } from "../../../../Types";
import { authAPI } from "../../../../api/auth";

function SignUp1 () {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, setError, formState:{errors}, getValues} = useForm<IMemberSignupForm>();
  const onValid = (data:IMemberSignupForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("password", "");
    setValue("passwordConfirm", "");
    try {
      const joinData:IJoinBody = {
        email:data.email,
        nickname:data.username,
        password:data.password
      };
      /**exailDupCheck 필요 */
      authAPI.axiosPostJoin(joinData);
      navigate('/', {replace:true});
    } catch (error) {
      console.log(error);
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <S.hookGrid>
          <S.InputBox>
            <T.Pretendard13R>E-mail</T.Pretendard13R>
            <input 
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: "이메일 양식이 아닙니다."}
              })}
              placeholder="이메일을 입력해주세요"
            />
            <span>{errors?.email?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>Username</T.Pretendard13R>
            <input 
              {...register("username", {
                required: "이름을 입력해주세요"
              })}
              placeholder="실명으로 입력해주세요."
            />
            <span>{errors?.username?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>Password</T.Pretendard13R>
            <input 
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength:{value:8, message:"8자 이상의 비밀번호를 입력해주세요"},
                pattern:{ value:/[A-Za-z0-9]+$/, message:"영문 + 숫자 형태로 입력해주세요"}
              })}
              placeholder="8자 이상, 영문 + 숫자"
              type="password"
            />
            <span>{errors?.password?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>Password Confirm</T.Pretendard13R>
            <input 
              {...register("passwordConfirm", {
                required: "비밀번호를 다시 입력해주세요",
                validate: (value) => {
                  const {password} = getValues();
                  return password === value || "비밀번호가 일치하지 않습니다.";
                }
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
            />
            <span>{errors?.passwordConfirm?.message}</span>
          </S.InputBox>
        </S.hookGrid>
        <S.btnArea>
          {/* <Link to="/members/signup2"> */}
            <NextBtn type={"submit"} name={"Next"}/>
          {/* </Link> */}
        </S.btnArea>
      </form>
    </>
  )
}

export default SignUp1;