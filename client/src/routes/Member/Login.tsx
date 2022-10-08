import * as S from "./SHook";
import * as T from "../../components/Global/Text/Text";
import NextBtn from "../../components/Global/Buttons/NextBtn";
import SubNextBtn from "../../components/Global/Buttons/SubNextBtn";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../../atoms";
import styled from "styled-components";

interface IForm {
  extraError: string;
  username?: string;
  password?: string;
}

const GoogleLoginBtn = styled.button`
  height: 46px;
  width: 191px;
  background-image: url("https://lh3.googleusercontent.com/NSljbB1M15GOSw2Tni5PfP1w9LWyN9xPlCUnjsPAMoFkbXnxoQNON2QkT0hJx_7Xh1MBazOl-L_JEOuPoJZ3Pmsob3zJ34DZZ8dyRM92AJyPlowHTeFfjsMwdl8bW5VyJju5n2C2S30XVn5qBSFqms5vESrsAj3kOQLrlK-OGJm6VDpQK7HA0VAO4jOVN3NeoXdwP2RRPnjvEJKTErwDpEoGbHfeAl6z4hXTtVsPeZ-MD4xNmrzj2VLlUAk2HzaUbxJGDko9JM-LfEXAuXY7tG2BvyHLeO_Oc8eKZAUGM2qGmiwv_hfSX0nA8R55mkiMxHorDrYF3RZtdeNQETyUj8QfZjizW9q0UBlW8_0_xjeFN8JO97KhoBBHxjlLF2CKcaOpBSGzmb1FqMPrQd-pnkW4iXS5sbZytFxieknqP5zTty1oRaEKsAUFjlk9hYPf9--x887RrRhSMkaHgmdrhUXHfOYA2CpE9fmPomRbHyQjXKUhE2GKykLZNIIZIs32StlSn1ZK9D_v9cIaSFCgSzDPTULuQY4qob7hCvftIWXwU1HOkiDtLEAUXaENQetpBYyVmQsfAVyFmXLio5ayketXcH6FWkki_77lsLCOAIpc143oe8IwYPSxtwUdV72vztGKhCMgouFRJLOq_DockIvJC-p85Fn2rGLJpWwCK6dyBhLd5jZgxUlLEtbNr9KWObfKd-QcBRyjrMAAJ4hiFYJ4lzb9Ep4_F6ViKjazVVMlozgMVXgHmlzVF5Ir4fombi5138O1MpeqHGnS3fiONi3xew1KccIroJZs1VMOtX7pnyABuIBN2BC4NebVOJEQFr0k2294oDUYIkWX9hEtez5bjlM0vjfDk6NhHUVCoZZFk13kPJ30omXwbfcWcOD-zo--cfE4IifH0FD60SDP3SgGjVc4zpyiP9zeyQKxqmppTC3rRJOoD83cqWrvzogyX-v8IwH5GDtBufyJ-0tD7G4VLQq41cc3m3sESsk=w382-h92-no?authuser=2");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;


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
          <Link to="">
            <SubNextBtn type={"button"} name={"비밀번호 찾기"}/>
          </Link>
          <S.InputBox>
            <T.Pretendard13R>You can also sign in with:</T.Pretendard13R>
            <Link to=""><GoogleLoginBtn type="button"/></Link>
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