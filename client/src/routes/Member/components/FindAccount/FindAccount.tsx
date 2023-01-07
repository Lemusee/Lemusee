import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { useForm } from "react-hook-form";
import { IMemberFindAccountForm } from "../../../../Types";
import emailjs from '@emailjs/browser';
import SubNextBtn from "../../../../GlobalComponents/Buttons/SubNextBtn";
import { authAPI } from "../../../../api/auth";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { resetPasswordEmailAtom } from "../../../../storage/members";


function FindAccount () {
  const [isExistence, setIsExistence] = useState<boolean>(false);
  const setResetPasswordEmail = useSetRecoilState(resetPasswordEmailAtom);
  emailjs.init("WYjdzgbtaMNxhTIOL");
  const { register, handleSubmit, setValue, setError, formState:{errors}, getValues } = useForm<IMemberFindAccountForm>();
  const onValid = (data:IMemberFindAccountForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("email", "");
    const template = {
      email: data.email,
      emailLink: "https://lemusee.site/members/resetpassword",
    }
    emailjs.send("service_zxyz92g", "template_5jqhoeh", template).then(response=>{
      setResetPasswordEmail(data.email);
      window.alert(`${data.email}로 인증메일이 전송되었습니다.`);
    }).catch(error => {console.log(error)});
  };

  const emailExistenceCheck = async () => {
    const email = getValues('email');
    if (email) {
      const code = await authAPI.axiosGetEmailExist(email);
      if (code === 1000) {
        setIsExistence(true);
      }
      if (code === 2011) {
        window.alert("입력하신 이메일이 회원이 아닙니다.");
        setIsExistence(false);
      }
    };
    if (!email) window.alert("이메일을 입력해주세요");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <S.hookGrid>
          <S.InputBox>
            <T.Pretendard13R>E-mail address</T.Pretendard13R>
            <input 
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i, message: "이메일 양식이 아닙니다."}
              })}
              placeholder="email@email.com"
            />
            <span>{errors?.email?.message}</span>
          </S.InputBox>
          <SubNextBtn type={"button"} name={"이메일 확인"} onClick={emailExistenceCheck} />
        </S.hookGrid>
        <S.btnArea>
          {isExistence ? (
            <NextBtn type={"submit"} name={"Send link to your e-mail"}/>
          ) : null}
        </S.btnArea>
      </form>
    </>
  )
}

export default FindAccount;