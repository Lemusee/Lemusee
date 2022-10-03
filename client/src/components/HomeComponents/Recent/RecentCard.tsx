import * as S from "./SRecentCard";
import * as T from "../../Global/Text/Text";
import imgByCategory from "../../../assets/StaticData/RecentImg.json";
import { Categories } from "../../../atoms";
import { Link } from "react-router-dom";

interface ICardData {
  title?:string;
  content?:string;
  category:Categories;
  videoUrl?:string;
}

function RecentCard ({content, title, category, videoUrl}:ICardData) {
  const imgList = {...imgByCategory};
  return (
    <>
      <Link to={`player/${videoUrl}`}>
        <S.Wrapper imgUrl={imgList[category][Math.floor(Math.random()*imgList[category].length)]}>
          <S.Container>
            <S.TextBox>
              <T.Pretendard15B>{title}</T.Pretendard15B>
              <T.Pretendard15R>{content}</T.Pretendard15R>
            </S.TextBox>
          </S.Container>
        </S.Wrapper>
      </Link>
    </>
  )
}

export default RecentCard;