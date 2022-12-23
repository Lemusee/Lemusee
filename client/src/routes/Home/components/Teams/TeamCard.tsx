import * as S from "./STeamCard";
import * as T from "../../../../GlobalComponents/Text/Text";
import { IHomeTeamCard } from "../../../../Types";

function TeamCard ({title,imgUrl,content}:IHomeTeamCard) {
  return (
    <>
      <S.Card>
        <S.Img imgUrl={imgUrl}/>
        <T.Pretendard17M>{title}</T.Pretendard17M>
        <T.Pretendard15R>{content}</T.Pretendard15R>
      </S.Card>
    </>
  )
}

export default TeamCard;