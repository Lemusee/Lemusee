import * as S from "./SCuration";
import * as T from "../../Global/Text/Text";
import CurationListCard from "./CurationListCard";

function Curation () {
  const curationInfo = {
    title:"lemusien of this week", 
    contents:"시들어 이상의 황금시대의 꽃이 스며들어 가치를 소금이라 위하여서, 철환하였는가? 어디 못할 소리다.이 ...", 
    imgUrl:"https://ifh.cc/g/Om4OSG.jpg",
    cardNum: 1,
    focus: true,
  }
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.CurationBoard>
            <S.BoardLeft>
              <T.Pretendard44B color="#b7b7b7">{`CURATION#${"1"}`}</T.Pretendard44B>
              <T.Pretendard44B>{"Lemusien of this week"}</T.Pretendard44B>
              <T.Pretendard17R>
                {"시들어 이상의 황금시대의 꽃이 스며들어 가치를 소금이라 위하여서, 철환하였는가? 어디 못할 소리다.이것은 무엇이 있음으로써 위하여서. 더운지라 가진 가는 고행을 것이다.보라, 예수는 인생에 얼마나 피다. 그들의 아니더면, 돋고, 튼튼하며, 운다. 실로 이상 타오르고 수 교향악이다. 이상 관현악이며, 않는 가장 보내는 이것이다. 얼마나 길지 청춘 그리하였는가? 품으며, 기쁘며, 그들의 우리는 인간이 그들의 같이, 뿐이다. 얼음에 있는 어디 그들은 있을 관현악이며, 것이다.보라, 듣기만 것이다."}
              </T.Pretendard17R>
              <S.nexBtn>
                <T.Pretendard15M>Next Curation</T.Pretendard15M>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14C3.72386 14 3.5 14.2239 3.5 14.5C3.5 14.7761 3.72386 15 4 15V14ZM20.5 14.5V15C20.7505 15 20.9623 14.8146 20.9956 14.5664C21.0288 14.3181 20.8732 14.0835 20.6316 14.0176L20.5 14.5ZM15.5 8C15.5 7.72386 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.72386 14.5 8H15.5ZM4 15H20.5V14H4V15ZM20.6316 14.0176C19.8407 13.8019 18.5419 12.95 17.4259 11.7691C16.3066 10.5846 15.5 9.20472 15.5 8H14.5C14.5 9.59528 15.5268 11.2154 16.6991 12.4559C17.8748 13.7 19.3259 14.6981 20.3684 14.9824L20.6316 14.0176Z" fill="#202020"/>
                </svg>
              </S.nexBtn>
            </S.BoardLeft>
            <S.BoardRightImg imgUrl={"https://ifh.cc/g/Om4OSG.jpg"}/>
          </S.CurationBoard>
          <S.CurationList>
            <CurationListCard {...curationInfo}/>
          </S.CurationList>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default Curation;