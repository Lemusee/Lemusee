import * as S from "./STeamCard";
import * as T from "../../Global/Text/Text";

interface ITeamCard {
  title:string;
  imgUrl:string;
  content:string;
}

function TeamCard ({title,imgUrl,content}:ITeamCard) {
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