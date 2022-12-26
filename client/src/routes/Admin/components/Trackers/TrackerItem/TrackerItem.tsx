import styled from "styled-components";
import * as T from "../../../../../GlobalComponents/Text/Text";
import { ITrackerItem } from "../../../../../Types";

const Wrapper = styled.div`
  width: 100%;
  max-width: 348px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-bottom: 40px;
  ${T.Pretendard17M} {
    color: ${props => props.theme.lemuseeblack_100};
    width: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  };
`; 
const ChangeList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  ${T.Pretendard17R} {
    width: inherit;
    color: ${props=> props.theme.lemuseeblack_60};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  };
`;

function TrackerItem ({title, changes}:ITrackerItem) {
  return (
    <Wrapper>
      <T.Pretendard17M>{title}</T.Pretendard17M>
      <ChangeList>
        {changes ? changes.map(item => {
          return <T.Pretendard17R>{item}</T.Pretendard17R>
        }) : null}
      </ChangeList>
    </Wrapper>
  );
};

export default TrackerItem;