import * as S from "./SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import SubNextBtn from "../../../../GlobalComponents/Buttons/SubNextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isAdmin, isLoadingAtom } from "../../../../storage/common";
import { myUserIdAtom } from "../../../../storage/user";
import { isLoggedInAtom } from "../../../../storage/common";
import { useState } from "react";
import { IMemberLoginForm, IMemberPersonalData } from "../../../../Types";
import useAuthAPI from "../../../../hooks/useAuthAPI";
import Loading from "../../../../GlobalComponents/Loading/Loading";

function Login () {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IMemberLoginForm>({
    defaultValues: {
      email: '',
      password: '',
      autoLogin: false
    }
  });
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const userId = useRecoilValue(myUserIdAtom);
  const navigate = useNavigate();
  const { login } = useAuthAPI();

  const onValid = async (result:IMemberLoginForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("password", "");
    setIsLoginLoading(true);
    await login(result);
    if (userId) navigate('/', {replace:true});
    setIsLoginLoading(false);
  };
  if (isLoggedIn) navigate("/", {replace:true});
  return (
    <>
      {isLoginLoading ? <Loading/> : (
        <form onSubmit={handleSubmit(onValid)}>
          <S.hookGrid>
            <S.InputBox>
              <T.Pretendard13R>Email</T.Pretendard13R>
              <input 
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: "이메일 양식이 아닙니다."}
                })}
                placeholder="이메일을 입력해주세요"
              />
              <span>{errors?.email?.message}</span>
            </S.InputBox>
            <S.AutoLogInInput>
              <input 
                  type="checkbox"
                  {...register("autoLogin")}
                />
              <T.Pretendard13R>자동 로그인</T.Pretendard13R>
            </S.AutoLogInInput>
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
            <Link to="/members/findaccount">
              <SubNextBtn type={"button"} name={"비밀번호 찾기"}/>
            </Link>
            {/* <S.InputBox>
              <T.Pretendard13R>You can also sign in with:</T.Pretendard13R>
              <Link to=""><S.GoogleLoginBtn/></Link>
            </S.InputBox> */}
          </S.hookGrid>
          <S.btnArea>
              <NextBtn type={"submit"} name={"Log in"}/>
            <Link to="/members/signup1">
              <NextBtn type={"button"} name={"Sign up"}/>
            </Link>
          </S.btnArea>
        </form>
      )}
    </>
  )
}

export default Login;