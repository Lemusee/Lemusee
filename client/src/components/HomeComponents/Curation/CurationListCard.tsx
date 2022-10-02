import * as S from "./SCurationListCArd";
import * as T from "../../Global/Text/Text";

interface ICurationInfo {
  title?:string;
  contents?:string;
  imgUrl?:string;
  cardNum?:number;
  focus?:number;
  onClick?:() => void;
}

function CurationListCard ({title, contents, imgUrl, cardNum, focus}:ICurationInfo) {
  return (
    <>
      <S.Wrapper imgUrl={imgUrl} focus={focus===cardNum}>
        <S.Container focus={focus===cardNum}>
          <S.TextBox focus={focus===cardNum}>
            <S.Bar focus={focus===cardNum}/>
            <T.Pretendard44B>{title}</T.Pretendard44B>
            <T.Pretendard13R>{contents}</T.Pretendard13R>
          </S.TextBox>
          <T.Pretendard19B>{`CURATION #${cardNum}`}</T.Pretendard19B>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default CurationListCard;