import * as S from "./SCurationListCArd";
import * as T from "../../Global/Text/Text";

interface ICurationInfo {
  title?:string;
  contents?:string;
  imgUrl?:string;
  cardNum?:number;
  focus?: boolean | false;
}

function CurationListCard ({title, contents, imgUrl, cardNum, focus}:ICurationInfo) {
  return (
    <>
      <S.Wrapper imgUrl={imgUrl} focus={focus}>
        <S.Container focus={focus}>
          <S.TextBox focus={focus}>
            <S.Bar focus={focus}/>
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