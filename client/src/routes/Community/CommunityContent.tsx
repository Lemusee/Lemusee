import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import contentData from "../../assets/dummyData/dummyCommunityContent.json";
import { contentTitle, isLoggedInAtom, myUserIdAtom } from "../../atoms";
import styled from "styled-components";
import * as G from "../../components/Global/Spacing/Spacing";
import * as T from "../../components/Global/Text/Text";
import Loading from "../../components/Global/Loading/Loading";
import Moment from "react-moment";
import Comment from "../../components/CommunityComponents/Comment";

interface IComment {
  id: number;
  userId : number;
  writer : string;
  content : string;
  updatedAt : string;
};

interface IContent {
  id: number;
  communityTitleId: string;
  title: string;
  updatedAt: string;
  userId: number;
  writer: string;
  content: string;
  comments: IComment[];
};

const Wrapper = styled(G.Wrapper)`
  flex-direction: column;
  gap: 0px;
  margin-top: 15px;
`;

const UserArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const NameDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  ${T.Pretendard13M} {
    color: ${props => props.theme.lemuseeblack_100};
  };
  ${T.Pretendard13R} {
    color: ${props=> props.theme.lemuseeblack_60};
  };
`;

const EditArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
`;

const Btn = styled.button`
  ${T.Pretendard13M} {
    color: ${props => props.theme.lemuseeblack_80};
  };
  ${T.Pretendard13R} {
    color: ${props=> props.theme.lemuseeblack_70};
  };
`;

const TextArea = styled.div`
  width: 100%;
  white-space: pre-line;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  padding-bottom: 100px;
  border-bottom: 1px solid ${props=>props.theme.lemuseeblack_60};
  margin-bottom: 15px;
`;

const Comments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`;


function CommunityContent () {
  const [copydata, setCopydata] = useState<IContent>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isLogedIn = useRecoilValue(isLoggedInAtom);
  const userId = useRecoilValue(myUserIdAtom);
  
  useEffect(()=>{
    const data = contentData.result;
    setCopydata(data);
    setIsLoading(false);
  },[]);

  return (
    <>
        {isLoading ? <Loading/> : (
          <Wrapper>
            <UserArea>
              <NameDate>
                <T.Pretendard13M>{`${copydata?.writer} 레뮤지앙`}</T.Pretendard13M>
                <T.Pretendard13R>
                  <Moment format="YY.MM.DD.">{copydata?.updatedAt}</Moment>
                </T.Pretendard13R>
              </NameDate>
              {copydata && (userId === copydata?.userId) ? (
                <EditArea>
                  <Btn>
                    <T.Pretendard13R>수정</T.Pretendard13R>
                  </Btn>
                  <Btn>
                    <T.Pretendard13M>삭제</T.Pretendard13M>
                  </Btn>
                </EditArea>
              ) : null}
            </UserArea>
            <TextArea>{copydata?.content}</TextArea>
            <T.Pretendard17M>COMMENTS</T.Pretendard17M>
            <Comments>
              {copydata && copydata?.comments.map(i => (
                <Comment id={i.id} userId={i.userId} writer={i.writer} content={i.content} updatedAt={i.updatedAt} />
              ))}
            </Comments>
          </Wrapper>
        )}
    </>
  )
}

export default CommunityContent;