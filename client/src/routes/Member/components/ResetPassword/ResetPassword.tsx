import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { useForm } from "react-hook-form";
import { IMemberResetPWForm } from "../../../../Types";
import useResetPassword from "../../../../hooks/useResetPassword";


function ResetPassword () {
  const {authrResetPassword} = useResetPassword();
  const { register, handleSubmit, setValue, setError, formState:{errors}, watch} = useForm<IMemberResetPWForm>();
  const onValid = async (data:IMemberResetPWForm) => {
    setError("extraError", {message:"Server offline"});
    if (data.password) authrResetPassword(data.password);
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
                pattern:{ value:/[A-Za-z0-9]+$/, message:"영문 + 숫자 형태로 입력해주세요"},
                validate: {
                  Confirm : (value) => value !== watch('password') ? "비밀번호가 일치하지 않습니다" : true,
                },
              })}
              placeholder="비밀번호를 한번 더 입력해주세요"
              type="password"
            />
            <span>{errors?.passwordConfirm?.message}</span>
          </S.InputBox>
        </S.hookGrid>
        <S.btnArea>
          <NextBtn type={"submit"} name={"Password Confirm & Log in"}/>
        </S.btnArea>
      </form>
    </>
  )
}

export default ResetPassword;