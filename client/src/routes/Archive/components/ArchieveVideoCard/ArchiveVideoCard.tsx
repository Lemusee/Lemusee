import * as S from "./SArchiveVideoCard";
import * as T from "../../../../GlobalComponents/Text/Text";
import { IVideoItems } from "../../../../atoms";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Categories } from "../../../../atoms";


function VideoCard ({ title, publishedAt, videoURL, thumnailUrl, category } : IVideoItems) {
  const titles = (title.indexOf('(') !== -1) ? title.split('(') : [title, ')'];
  const [titleSorted, nameSorted] = [titles[0], titles[1].replace(')', '')];
  const categoryList = {
    self_dev: "자기계발",
    culture_art: "문화예술",
    humanities_society: "인문사회",
    science_tech: "기술과학",
    activity: "활동기록",
    etc: "기타영상"
  }
  return (
    <>
      <Link to={`/player/${videoURL}`}>
        <S.Wrapper>
          <S.VideoImg thumnailUrl={thumnailUrl}/>
          <T.Pretendard15M>{titleSorted}</T.Pretendard15M>
          <S.videoDetailText>
            <T.Pretendard13R>{nameSorted}</T.Pretendard13R>
            <T.Pretendard11R>
              <Moment format="YY.MM.DD.">{publishedAt}</Moment>
            </T.Pretendard11R>
          </S.videoDetailText>
          <S.Tag>{categoryList[category]}</S.Tag>
        </S.Wrapper>
      </Link>
    </>
  )
}

export default VideoCard;