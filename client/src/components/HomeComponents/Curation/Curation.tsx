import * as S from "./SCuration";
import * as T from "../../Global/Text/Text";
import CurationListCard from "./CurationListCard";
import dummyCuration from "../../../assets/dummyData/dummyCurationGET.json";
import { listenerCount } from "process";
import React, { ReactElement, useEffect, useState } from "react";
import { useRecoilState} from "recoil";
import { curationState } from "../../../atoms";
import Loading from "../../Global/Loading/Loading";
import {ReactComponent as NextCurationSVG} from "../../../assets/icons/nextCuration.svg";

function Curation () {
  const curationList = [...dummyCuration.result.items];
  const curations = curationList.map((list) => {
    return (
      {
        cardNum: list.cardNum,
        title: list.title,
        contents : list.contents,
        imgUrl : list.imgUrl
      }
    )
  })
  // const curationList = curationFetch.map(list => {return {...list, focus:false}});
  const [curationInfo, setCurationInfo] = useRecoilState(curationState);
  const [isLoading, setIsLoading] = useState(false);
  const [focus, setFocus] = useState(0);
  useEffect(()=>{
    setCurationInfo(curations);
    setIsLoading(true);
  }, []);
  function onClick (event:React.MouseEvent<HTMLButtonElement>) {
    setFocus((prev:number) => {
      if (focus < curationInfo.length-1){
        return prev+1;
      } else {
        return 0;
      }})
  };
  return (
    <>
      <S.Wrapper>
        <S.Container>
          {isLoading ? (
            <S.CurationBoard>
              <S.BoardLeft>
                <S.BoardLeftText>
                  <T.Pretendard44B color="#b7b7b7">{`CURATION#${curationInfo[focus]?.cardNum}`}</T.Pretendard44B>
                  <T.Pretendard44B>{curationInfo[focus].title}</T.Pretendard44B>
                  <T.Pretendard17R>
                    {curationInfo[focus].contents}
                  </T.Pretendard17R>
                </S.BoardLeftText>
                <S.nexBtn onClick={onClick}>
                  <T.Pretendard15M>Next Curation</T.Pretendard15M>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14C3.72386 14 3.5 14.2239 3.5 14.5C3.5 14.7761 3.72386 15 4 15V14ZM20.5 14.5V15C20.7505 15 20.9623 14.8146 20.9956 14.5664C21.0288 14.3181 20.8732 14.0835 20.6316 14.0176L20.5 14.5ZM15.5 8C15.5 7.72386 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.72386 14.5 8H15.5ZM4 15H20.5V14H4V15ZM20.6316 14.0176C19.8407 13.8019 18.5419 12.95 17.4259 11.7691C16.3066 10.5846 15.5 9.20472 15.5 8H14.5C14.5 9.59528 15.5268 11.2154 16.6991 12.4559C17.8748 13.7 19.3259 14.6981 20.3684 14.9824L20.6316 14.0176Z" fill="#202020"/>
                  </svg>
                </S.nexBtn>
              </S.BoardLeft>
              <S.BoardRightImg imgUrl={curationInfo[focus].imgUrl}/>
            </S.CurationBoard>
          ) : <Loading/>}
          <S.CurationListArea>
            <S.CurationList>
              {isLoading ? (
                curationInfo.map(list => (
                  <button onClick={()=>setFocus(list.cardNum)} key={list.cardNum}>
                    <CurationListCard {...list} key={list.cardNum} focus={focus} />
                  </button>
                ))
              ) : <Loading/>}
            </S.CurationList>
            <S.NextCurationBtn onClick={onClick}>
              <NextCurationSVG/>
            </S.NextCurationBtn>
          </S.CurationListArea>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Curation;