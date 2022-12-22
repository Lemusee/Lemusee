import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text";
import Moment from "react-moment";
import { contentTitleAtom } from "../../../../atoms";
import { useSetRecoilState } from "recoil";

export interface IItem {
    id: number;
    title : string;
    preview : string;
    writer : string;
    updatedAt : string;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 40px;
  gap: 20px;
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_30};
    transition: 0.3s;
  };
  &:active {
    background-color: ${props => props.theme.lemuseeblack_50};
  };
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props=>props.theme.lemuseeblack_60};
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: minmax(65px, auto)  513px minmax(82px, auto);
  column-gap: 85px;
  ${T.Pretendard13R} {
    color: ${props=>props.theme.lemuseeblack_70};
    margin: 0 5px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

function ListItem ({id, updatedAt, title, preview, writer}:IItem) {
  const pageParam = useParams();
  const setContentTitle = useSetRecoilState(contentTitleAtom);

  return(
    <>
      <Link to={`/${pageParam.category}/content/${id}`} onClick={()=>setContentTitle(title)}>
        <Wrapper>
          <Line/>
          <Item>
            <T.Pretendard13R>
              <Moment format="YY.MM.DD.">{updatedAt}</Moment>
            </T.Pretendard13R>
            <Content>
              <T.Pretendard15M>{title}</T.Pretendard15M>
              <T.Pretendard13R>{preview}</T.Pretendard13R>
            </Content>
            <T.Pretendard13R>{`${writer} 레뮤지앙`}</T.Pretendard13R>
          </Item>
        </Wrapper>
      </Link>
    </>
  )
};

export default ListItem;