import * as S from "./SIndexByCategory";
import * as T from "../../../../GlobalComponents/Text/Text";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as R from "../Recommendation/SRecommends";
import { useRecoilValue } from "recoil";
import { playlistItemState, isLoadingAtom } from "../../../../atoms";
import { useState } from "react";
import Loading from "../../../../GlobalComponents/Loading/Loading";
import VideoCard from "../Recommendation/VideoCard";
import moment from "moment";
import { Categories } from "../../../../Types";

function IndexByCategory () {
  const videoItem = useRecoilValue(playlistItemState);
  const videoListByCat = [
    videoItem.filter(list => list.category === Categories.self_dev).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse().slice(0,9),
    videoItem.filter(list => list.category === Categories.humanities_society).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse().slice(0,9),
    videoItem.filter(list => list.category === Categories.culture_art).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse().slice(0,9),
    videoItem.filter(list => list.category === Categories.science_tech).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse().slice(0,9),
    videoItem.filter(list => list.category === Categories.activity).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse().slice(0,9),
  ];
  const tagList = [
    {
      num: 0,
      title: "자기계발",
      value: Categories.self_dev,
    },
    {
      num: 1,
      title: "인문사회",
      value: Categories.humanities_society,

    },
    {
      num: 2,
      title: "문화예술",
      value: Categories.culture_art,

    },
    {
      num: 3,
      title: "과학기술",
      value: Categories.science_tech,

    },
    {
      num: 4,
      title: "활동기록",
      value: Categories.activity,
    },
  ];
  const [focus, setFocus] = useState<number>(0);
  const isLoading = useRecoilValue(isLoadingAtom);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.contentTitle>
            <T.Pretendard17M>
              Lecture Index
            </T.Pretendard17M>
          </S.contentTitle>
          <S.TagBox>
            {tagList.map(list => (
              <button key={list.value} onClick={()=>{setFocus(list.num)}}>
                <G.Tag focus={focus} state={list.num}>{list.title}</G.Tag>
              </button>
            ))}
          </S.TagBox>
          <R.VideoBox>
            {isLoading ? videoListByCat[focus].map(list => <VideoCard key={list.id} {...list}/>) : <Loading/>}
          </R.VideoBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default IndexByCategory;