import { Link } from "react-router-dom";
import styled from "styled-components";
import * as T from "../Global/Text/Text";

interface IItem {
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
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

function ListItem (data:IItem) {
  return(
    <>
      <Link to={`content/${data.id}`}>
        <Wrapper>
          <Line/>
          <Item>
            <T.Pretendard13R>{data.updatedAt}</T.Pretendard13R>
            <Content>
              <T.Pretendard15M>{data.title}</T.Pretendard15M>
              <T.Pretendard13R>{data.preview}</T.Pretendard13R>
            </Content>
            <T.Pretendard13R>{data.writer}</T.Pretendard13R>
          </Item>
        </Wrapper>
      </Link>
    </>
  )
};

export default ListItem;