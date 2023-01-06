import * as S from "./SIndexByCategory";
import * as T from "../../../../GlobalComponents/Text/Text";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as R from "../Recommendation/SRecommends";
import { useRecoilValue } from "recoil";
import { playlistItemCatState } from "../../../../storage/archive";
import { isLoadingAtom } from "../../../../storage/common";
import { useEffect, useState } from "react";
import Loading from "../../../../GlobalComponents/Loading/Loading";
import VideoCard from "../Recommendation/VideoCard";
import { Categories, IVideoItems, IVideoItemsByCategory } from "../../../../Types";

function IndexByCategory () {
  const videoItems = useRecoilValue(playlistItemCatState);
  const [viewVideo, setViewVideo] = useState<IVideoItemsByCategory>();
  useEffect(()=> {
    if (videoItems) {
      const videoListByCat = {
        self_dev : [...videoItems["self_dev"]].reverse().slice(0,9),
        humanities_society : [...videoItems["humanities_society"]].reverse().slice(0,9),
        culture_art : [...videoItems["culture_art"]].reverse().slice(0,9),
        science_tech : [...videoItems["science_tech"]].reverse().slice(0,9),
        activity : [...videoItems["activity"]].reverse().slice(0,9),
      };
      setViewVideo(videoItems ? videoListByCat : {});  
    };
  }, [videoItems]);
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
  const [focus, setFocus] = useState<string>("self_dev");
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
              <button key={list.value} onClick={()=>{setFocus(list.value)}}>
                <G.Tag focus={focus} state={list.value}>{list.title}</G.Tag>
              </button>
            ))}
          </S.TagBox>
          <R.VideoBox>
            {isLoading && !viewVideo ? <Loading/> : viewVideo && viewVideo[focus].map(list => list && (<VideoCard key={list.id} {...list}/>))}
          </R.VideoBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default IndexByCategory;