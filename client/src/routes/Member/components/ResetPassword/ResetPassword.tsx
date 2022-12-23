import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IMemberResetPWForm } from "../../../../Types";

function ResetPassword () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IMemberResetPWForm>();
  const onValid = (data:IMemberResetPWForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("password", "");
    setValue("passwordConfirm", "");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <S.hookGrid>
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
                pattern:{ value:/[A-Za-z0-9]+$/, message:"영문 + 숫자 형태로 입력해주세요"}
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
            />
            <span>{errors?.passwordConfirm?.message}</span>
          </S.InputBox>
        </S.hookGrid>
        <S.btnArea>
          <Link to="/members/login">
            <NextBtn type={"submit"} name={"Password Confirm & Log in"}/>
          </Link>
        </S.btnArea>
      </form>
    </>
  )
}

export default ResetPassword;