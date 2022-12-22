import styled from "styled-components";
import * as T from "../../../../GlobalComponents/Text/Text";
import { IAdminChaptorTitle } from "../../../../Types";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  width: 100%;
  ${T.Pretendard13R} {
    color: ${props=>props.theme.lemuseeblack_60};
  };
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props=>props.theme.lemuseeblack_70};
`;

function AdminTitle (data:IAdminChaptorTitle) {
  return (
    <>
      <Title>
        <T.Pretendard21M>{data.title}</T.Pretendard21M>
        <Bar/>
        <T.Pretendard13R>{data.subtitle}</T.Pretendard13R>
      </Title>
    </>
  )
};

export default AdminTitle;