import * as S from "./SHook";
import * as T from "../../components/Global/Text/Text";
import NextBtn from "../../components/Global/Buttons/NextBtn";
import SubNextBtn from "../../components/Global/Buttons/SubNextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../atoms";

interface IForm {
  extraError: string;
  username?: string;
  password?: string;
}

function Login () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IForm>();
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInAtom);
  const navigate = useNavigate();
  const onValid = (data:IForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("password", "");
    setLoggedIn(true);
  };
  if (isLoggedIn) navigate("/", {replace:true});
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <S.hookGrid>
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
          <div></div>
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