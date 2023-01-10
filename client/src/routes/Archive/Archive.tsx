import Header from "../../GlobalComponents/Header/Header";
import * as S from "./SArchive";
import * as T from "../../GlobalComponents/Text/Text";
import { useRecoilValue } from "recoil";
import { playlistItemCatState, playlistItemState, searchItemAtom } from "../../storage/archive";
import { isLoadingAtom } from "../../storage/common";
import { useEffect, useState } from "react";
import ArchiveVideoCard from "./components/ArchieveVideoCard/ArchiveVideoCard";
import Loading from "../../GlobalComponents/Loading/Loading";
import { tagList } from "../../storage/archive";
import SearchTag from "./components/SearchTag/SearchTag";
import { IVideoItems } from "../../Types";
import { AnimatePresence } from "framer-motion";

function Archive () {
  const videoItem = useRecoilValue(playlistItemState);
  const videoCat = useRecoilValue(playlistItemCatState);
  const [focus, setFocus] = useState<string>("recent");
  const isLoading = useRecoilValue(isLoadingAtom);
  const searchKeyword = useRecoilValue(searchItemAtom);
  const [searchResult, setSearchResult] = useState<IVideoItems[]>([]);
  useEffect(()=>{
    if (videoItem) {
      const copyItem = [...videoItem];
      setSearchResult(
        copyItem.filter((list)=>
          list.title.toLowerCase().includes(searchKeyword)
        )
      );
    }
  }, [searchKeyword]);

  return(
    <>
      <Header thickness={false}/>
      <S.Wrapper>
        <S.Container>
          <S.TitleBlock>
            <T.Pretendard44B>Archive</T.Pretendard44B>
            <T.Pretendard17R>{!isLoading && videoItem ? `${videoItem.length} lectures` : "Loading..."}</T.Pretendard17R>
            <AnimatePresence>
              <S.TagBox>
                {tagList.map(list => (
                  list.value !== "search" ? (
                    <button 
                      key={list.value} 
                      onClick={()=>{setFocus(list.value)}}
                    >
                      <S.Tag 
                        focus={focus} 
                        state={list.value}
                        layoutId={list.value}
                      >{list.title}</S.Tag>
                    </button>
                  ) : (
                    <SearchTag focus={focus} state={list.value} onClickFunc={()=>setFocus(list.value)}/>
                  )
                ))}
              </S.TagBox>
            </AnimatePresence>
          </S.TitleBlock>
          <S.VideoListBox>
          {!isLoading && focus !== "search" ? videoCat && videoCat[focus].map(list => <ArchiveVideoCard key={list.id} {...list}/>) : focus === "search"? searchResult && searchResult.map(list => <ArchiveVideoCard key={list.id} {...list}/>) : <Loading/>}
          </S.VideoListBox>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Archive;