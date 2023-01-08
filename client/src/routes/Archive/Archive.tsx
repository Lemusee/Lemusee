import Header from "../../GlobalComponents/Header/Header";
import * as S from "./SArchive";
import * as T from "../../GlobalComponents/Text/Text";
import { useRecoilValue } from "recoil";
import { playlistItemCatState, playlistItemState } from "../../storage/archive";
import { isLoadingAtom } from "../../storage/common";
import { useState } from "react";
import ArchiveVideoCard from "./components/ArchieveVideoCard/ArchiveVideoCard";
import Loading from "../../GlobalComponents/Loading/Loading";
import { tagList } from "../../storage/archive";
import SearchTag from "./components/SearchTag/SearchTag";

function Archive () {
  const videoItem = useRecoilValue(playlistItemState);
  const videoCat = useRecoilValue(playlistItemCatState);
  const [focus, setFocus] = useState<string>("recent");
  const isLoading = useRecoilValue(isLoadingAtom);
  const [searchFocus, setSearchFocus] = useState(false);
  return(
    <>
      <Header thickness={false}/>
      <S.Wrapper>
        <S.Container>
          <S.TitleBlock>
            <T.Pretendard44B>Archive</T.Pretendard44B>
            <T.Pretendard17R>{!isLoading && videoItem ? `${videoItem.length} lectures` : "Loading..."}</T.Pretendard17R>
            <S.TagBox>
              {tagList.map(list => (
                <button key={list.value} onClick={()=>{setFocus(list.value)}}>
                  <S.Tag focus={focus} state={list.value}>{list.title}</S.Tag>
                </button>
              ))}
              <SearchTag focus={searchFocus} onClickFunc={()=>(setSearchFocus(prev => !prev))}/>
            </S.TagBox>
          </S.TitleBlock>
          <S.VideoListBox>
          {isLoading ? <Loading/> : videoCat && videoCat[focus].map(list => <ArchiveVideoCard key={list.id} {...list}/>)}
          </S.VideoListBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Archive;