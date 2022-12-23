import * as S from "../Login/SHook";
import * as T from "../../../../GlobalComponents/Text/Text";
import NextBtn from "../../../../GlobalComponents/Buttons/NextBtn";
import { useForm } from "react-hook-form";
import { IMemberFindAccountForm } from "../../../../Types";

function FindAccount () {
  const { register, handleSubmit, setValue, setError, formState:{errors}, } = useForm<IMemberFindAccountForm>();
  const onValid = (data:IMemberFindAccountForm) => {
    setError("extraError", {message:"Server offline"});
    setValue("email", "");
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
        </S.hookGrid>
        <S.btnArea>
            <NextBtn type={"submit"} name={"Send link to your e-mail"}/>
        </S.btnArea>
      </form>
    </>
  )
}

export default FindAccount;