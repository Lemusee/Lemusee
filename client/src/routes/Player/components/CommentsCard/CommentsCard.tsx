import * as S from "./SCommentsCard";
import * as T from "../../../../GlobalComponents/Text/Text";
import Moment from "react-moment";
import 'moment/locale/ko';

interface IComments {
  username?:string;
  createdAt?:string;
  content?:string;
  writtenByUser?:boolean;
}

function CommentsCard ({username, createdAt, content, writtenByUser}:IComments) {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <S.TitleLeft>
            <T.Pretendard13M>{username}</T.Pretendard13M>
            <T.Pretendard11R>
              <Moment format="YY.MM.DD.">{createdAt}</Moment>
            </T.Pretendard11R>
          </S.TitleLeft>
          {writtenByUser ? 
            <S.EditBtn>
              <T.Pretendard13M>수정/삭제</T.Pretendard13M>
            </S.EditBtn>
          : <></>}
        </S.Title>
        <T.Pretendard13R>{content}</T.Pretendard13R>
      </S.Wrapper>
    </>
  )
}

export default CommentsCard;