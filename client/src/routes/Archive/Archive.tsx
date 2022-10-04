import Header from "../../components/Global/Header/Header";
import * as S from "./SArchive";
import * as T from "../../components/Global/Text/Text";
import { useRecoilValue } from "recoil";
import {channelState, playlistItemState, Categories, isLoadingAtom } from "../../atoms";
import { useState } from "react";
import moment from "moment";
import ArchiveVideoCard from "../../components/ArchiveComponents/VideoCard/ArchiveVideoCard";
import Loading from "../../components/Global/Loading/Loading";

function Archive () {
  const channelInfo = useRecoilValue(channelState);
  const videoItem = useRecoilValue(playlistItemState);
  const videoListByCat = [
    [...videoItem].sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), "seconds")).reverse(),
    [...videoItem].sort((a,b) => {
      if(a.title.toLowerCase() > b.title.toLowerCase()) return 1; 
      if(a.title.toLowerCase() < b.title.toLowerCase()) return -1; 
      return 0;
      }),
    [...videoItem].filter(list => list.category === Categories.self_dev).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
    [...videoItem].filter(list => list.category === Categories.humanities_society).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
    [...videoItem].filter(list => list.category === Categories.culture_art).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
    [...videoItem].filter(list => list.category === Categories.science_tech).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
    [...videoItem].filter(list => list.category === Categories.activity).sort((a,b)=> moment(a.publishedAt).diff(moment(b.publishedAt), 'seconds')).reverse(),
  ];
  const tagList = [
    {
      num: 0,
      title: "Recent",
      value: "recent",
    },
    {
      num: 1,
      title: "A-Z",
      value: "A-Z",
    },
    {
      num: 2,
      title: "자기계발",
      value: Categories.self_dev,
    },
    {
      num: 3,
      title: "인문사회",
      value: Categories.humanities_society,
    },
    {
      num: 4,
      title: "문화예술",
      value: Categories.culture_art,
    },
    {
      num: 5,
      title: "과학기술",
      value: Categories.science_tech,
    },
    {
      num: 6,
      title: "활동기록",
      value: Categories.activity,
    }
  ];
  const [focus, setFocus] = useState<number>(0);
  const isLoading = useRecoilValue(isLoadingAtom);
  const [searchFocus, setSearchFocus] = useState(false);
  console.log(videoListByCat);
  return(
    <>
      <Header thickness={false}/>
      <S.Wrapper>
        <S.Container>
          <S.TitleBlock>
            <T.Pretendard44B>Archive</T.Pretendard44B>
            <T.Pretendard17R>{isLoading ? `${channelInfo[0]?.statistics?.videoCount} lectures` : "Loading..."}</T.Pretendard17R>
            <S.TagBox>
              {tagList.map(list => (
                <button key={list.value} onClick={()=>{setFocus(list.num)}}>
                  <S.Tag focus={focus} state={list.num}>{list.title}</S.Tag>
                </button>
              ))}
                <S.SearchTag focus={searchFocus} >
                  <svg onClick={()=>(setSearchFocus(prev => !prev))} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16.7059L18 19M18 12.1176C18 15.4963 15.3137 18.2353 12 18.2353C8.68629 18.2353 6 15.4963 6 12.1176C6 8.73896 8.68629 6 12 6C15.3137 6 18 8.73896 18 12.1176Z" stroke="#202020" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {searchFocus ? <input/> : <></>}
                </S.SearchTag>
            </S.TagBox>
          </S.TitleBlock>
          <S.VideoListBox>
          {isLoading ? videoListByCat[focus].map(list => <ArchiveVideoCard key={list.id} {...list}/>) : <Loading/>}
          </S.VideoListBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Archive;