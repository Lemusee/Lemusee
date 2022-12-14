import { useRecoilValue } from "recoil";
import { myPersonalDataAtom } from "../../../../storage/user";
import { isLoggedInAtom } from "../../../../storage/common";
import styled from "styled-components";
import * as G from "../../../../GlobalComponents/Spacing/Spacing";
import * as T from "../../../../GlobalComponents/Text/Text";
import Moment from "react-moment";
import { IComment, IisMine } from "../../../../Types";


const Wrapper = styled(G.Wrapper)<IisMine>`
  width: 100%;
  padding: 15px 5px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${props=> props.isMine ? props.theme.lemuseeblack_20 : "transparent"};
  ${T.Pretendard15R} {
    color: ${props=>props.theme.lemuseeblack_70};
  }
`;

const UserDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  ${T.Pretendard15M} {
    color: ${props=>props.theme.lemuseeblack_100};
  };
  ${T.Pretendard13R} {
    color: ${props=>props.theme.lemuseeblack_60};
  };
`;

const Btns = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
`;

const EditBtn = styled.button`
  ${T.Pretendard11R} {
    color: ${props => props.theme.lemuseeblack_60};
  };
`;
const DeletBtn = styled.button`
  ${T.Pretendard11R} {
    color: ${props => props.theme.lemuseeblack_80};
  };
`;

function Comments ({id, userId, writer, content, updatedAt}:IComment) {
  const islogged = useRecoilValue(isLoggedInAtom);
  const personalData = useRecoilValue(myPersonalDataAtom);
  return (
    <>
      <Wrapper isMine={(userId === personalData?.userId) && islogged}>
        <UserDate>
          <T.Pretendard15M>{writer}</T.Pretendard15M>
          <T.Pretendard13R>
            <Moment format="YY.MM.DD.">{updatedAt}</Moment>
          </T.Pretendard13R>
        </UserDate>
        <T.Pretendard15R>{content}</T.Pretendard15R>
        {islogged && personalData?.userId === userId ? (
          <Btns>
            <EditBtn>
              <T.Pretendard11R>수정</T.Pretendard11R>
            </EditBtn>
            <DeletBtn>
              <T.Pretendard11R>삭제</T.Pretendard11R>
            </DeletBtn>
          </Btns>
        ) : null}
      </Wrapper>
    </>
  )
};

export default Comments;

