import * as S from "./SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import SubNextBtn from "../../../../GlobalComponents/Buttons/SubNextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isAdmin } from "../../../../storage/common";
import { myUserIdAtom } from "../../../../storage/user";
import { isLoggedInAtom } from "../../../../storage/common";
import dummyLogInResponse from "../../../../assets/dummyData/dummyLogInResponse.json";
import dummyPersonalInfo from "../../../../assets/dummyData/dummyPersonalInfo.json";
import { useState } from "react";
import { IMemberLoginForm, IMemberPersonalData } from "../../../../Types";
import useAuthAPI from "../../../../hooks/useAuthAPI";

function Login () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IMemberLoginForm>({
    defaultValues: {
      email: '',
      password: '',
      autoLogin: false
    }
  });
  const [personalData, setPersonalData] = useState<IMemberPersonalData>({});
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInAtom);
  const userId = useRecoilValue(myUserIdAtom);
  const setIsAdmin = useSetRecoilState(isAdmin);
  const navigate = useNavigate();
  const { login } = useAuthAPI();

  const onValid = async (result:IMemberLoginForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("password", "");

    try {
      await login(result);
      if (userId) navigate('/', {replace:true});
      /**프로필 get 연결 필요 */
    } catch (code: any) {
      if (code && code === 2017) {
        window.alert("존재하지 않는 회원정보입니다.");
      };
      if (code && code === 4000) {
        window.alert("서버 연결 오류");
      };
    };

    // if (dummyLogInResponse.isSuccess && dummyLogInResponse.code === 1000) {
    //   setLoggedIn(true);
    //   setUserId(dummyLogInResponse.result.userId);
    //   /**Personal Data get */
    //   const personal = {
    //     id: dummyPersonalInfo.result.id,
    //     nickname: dummyPersonalInfo.result.nickName,
    //     team: dummyPersonalInfo.result.team,
    //     role: dummyPersonalInfo.result.role,
    //     isChief: dummyPersonalInfo.result.isChief,
    //   };
    //   setPersonalData(personal);
    //   if (personal.role === "admin") {
    //     setIsAdmin(true);
    //   };
    // } else if (dummyLogInResponse && dummyLogInResponse.code === 2017) {
    //   window.alert("존재하지 않는 회원정보입니다.");
    // } else if (dummyLogInResponse && dummyLogInResponse.code === 4000) {
    //   window.alert("서버 연결 오류");
    // };
  };
  if (isLoggedIn) navigate("/", {replace:true});
  return (
    <>
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
          <S.InputBox>
            <T.Pretendard13R>You can also sign in with:</T.Pretendard13R>
            <Link to=""><S.GoogleLoginBtn/></Link>
          </S.InputBox>
        </S.hookGrid>
        <S.btnArea>
            <NextBtn type={"submit"} name={"Log in"}/>
          <Link to="/members/signup1">
            <NextBtn type={"button"} name={"Sign up"}/>
          </Link>
        </S.btnArea>
      </form>
    </>
  )
}

export default Login;