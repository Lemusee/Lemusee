import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IVideoItems, playlistItemState } from "../../../atoms";
import * as T from "../../Global/Text/Text";
import * as S from "./SVideoCard";
import Moment from "react-moment";

function VideoCard ({ title, description, publishedAt, videoURL } : IVideoItems) {
  return (
    <>
      <Link to={`player/${videoURL}`}>
        <S.Card>
          <S.CardTitle>
            <T.Pretendard15M>{title}</T.Pretendard15M>
            <T.Pretendard13R>
              <Moment format="YY.MM.DD.">{publishedAt}</Moment>
            </T.Pretendard13R>
          </S.CardTitle>
          <S.CardContent>{description.replace(/\n/g, " ")}</S.CardContent>
          <S.Speaker>{"윤창우 연사자"}</S.Speaker>
        </S.Card>
      </Link>
    </>
  )
}

export default VideoCard;