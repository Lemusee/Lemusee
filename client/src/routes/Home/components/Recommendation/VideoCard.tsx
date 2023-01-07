import { Link } from "react-router-dom";
import * as T from "../../../../GlobalComponents/Text/Text";
import * as S from "./SVideoCard";
import Moment from "react-moment";
import { IVideoItems } from "../../../../Types";
import useTitleSort from "../../../../hooks/useTitleSort";

function VideoCard (data : IVideoItems | null) {
  const titles = useTitleSort(data?.title);
  return (
    <>
      <Link to={`player/${data && data.videoURL}`}>
        <S.Card>
          <S.CardTitle>
            <T.Pretendard15M>{titles && titles[0]}</T.Pretendard15M>
            <T.Pretendard13R>
              <Moment format="YY.MM.DD.">{data ? data.publishedAt : undefined}</Moment>
            </T.Pretendard13R>
          </S.CardTitle>
          <S.CardContent>{data && data.description.replace(/\n/g, " ")}</S.CardContent>
          <S.Speaker>{titles && titles[1]}</S.Speaker>
        </S.Card>
      </Link>
    </>
  )
}

export default VideoCard;