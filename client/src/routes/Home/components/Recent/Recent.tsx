import * as S from "./SRecent";
import * as T from "../../../../GlobalComponents/Text/Text";
import RecentCard from "./RecentCard";
import { useRecoilValue } from "recoil";
import { playlistItemState } from "../../../../storage/archive";
import moment from "moment";

function Recent () {
  const videoItem = useRecoilValue(playlistItemState);
  const videoItemSortByTime = videoItem && [...videoItem].sort((a,b) => moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds'));
  const display = videoItemSortByTime && videoItemSortByTime.slice(0,8).map(list => {
    return (
      {
        title:list.title,
        content:list.description,
        category: list.category,
        videoUrl: list.videoURL
      }
    )
  })
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>recent lectures</T.Pretendard17M>
          </S.contentTitle>
          <S.CardBlock>
            {
              display && display.map(list => 
                list && (<RecentCard {...list} key={list.title}/>)
              )
            }
          </S.CardBlock>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Recent;