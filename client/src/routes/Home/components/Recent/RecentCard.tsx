import * as S from "./SRecentCard";
import * as T from "../../../../GlobalComponents/Text/Text";
import imgByCategory from "../../../../assets/StaticData/RecentImg.json";
import { Link } from "react-router-dom";
import { IHomeRecentCardData } from "../../../../Types";


function RecentCard ({content, title, category, videoUrl}:IHomeRecentCardData) {
  const titles = (title.indexOf('(') !== -1) ? title.split('(') : [title, ')'];
  const titleSorted = titles[0];
  const imgList = {...imgByCategory};
  return (
    <>
      <Link to={`player/${videoUrl}`}>
        <S.Wrapper imgUrl={imgList[category][Math.floor(Math.random()*imgList[category].length)]}>
          <S.Container>
            <S.TextBox>
              <T.Pretendard15B>{titleSorted}</T.Pretendard15B>
              <T.Pretendard15R>{content}</T.Pretendard15R>
            </S.TextBox>
          </S.Container>
        </S.Wrapper>
      </Link>
    </>
  )
}

export default RecentCard;