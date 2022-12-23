import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IMemberSignupDetailForm } from "../../../../Types";


function SignUp2 () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IMemberSignupDetailForm>();
  const onValid = (data:IMemberSignupDetailForm) => {
    setError("extraError", {message:"Server offline"});
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <S.hookGrid>
          <S.InputBox>
            <T.Pretendard13R>생일</T.Pretendard13R>
            <input 
              {...register("birthday", {
                required: "YYMMDD 6자리 양식으로 입력해주세요",
                // pattern:{ value:/[0-9]{6}+$/, message:"YYMMDD 6자리 양식으로 입력해주세요"}
              })}
              placeholder="예: 990000 (6자리)"
            />
            <span>{errors?.birthday?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>전화번호</T.Pretendard13R>
            <input 
              {...register("phone", {
                required: "전화번호를 입력해주세요",
                // pattern:{ value:/[0-9]{11,12}+$/, message:"전화번호 양식으로 입력해주세요"}
              })}
              placeholder='"-"를 제외하고 숫자만 입력해주세요'
            />
            <span>{errors?.phone?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>학과</T.Pretendard13R>
            <input 
              {...register("department", {
                required: "학과를 입력해주세요"
              })}
              placeholder="예 : 의생명공학과"
            />
            <span>{errors?.department?.message}</span>
          </S.InputBox>
          <S.InputBox>
            <T.Pretendard13R>학번</T.Pretendard13R>
            <input 
              {...register("studentNum", {
                required: "학번을 입력해주세요",
                // pattern:{ value:/[0-9]{9}+$/, message:"9자리 숫자 양식으로 입력해주세요"}
              })}
              placeholder="202300000 (9 자리 숫자)"
            />
            <span>{errors?.studentNum?.message}</span>
          </S.InputBox>
        </S.hookGrid>
        <S.btnArea>
          <Link to="/">
            <NextBtn type={"submit"} name={"Sign Up"}/>
          </Link>
        </S.btnArea>
      </form>
    </>
  )
}

export default SignUp2;