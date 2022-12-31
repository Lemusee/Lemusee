import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { adminCurationAtom, adminExecutiveAtom, adminMemberStateAtom, adminMemberStateChangesAtom, adminRecruitingAtom } from "../../../../../storage/admin";
import * as T from "../../../../../GlobalComponents/Text/Text";

export const Button = styled.button`
  cursor: pointer;
  height: 25%;
  width: 100%;
  padding: 0;
  border-radius: 0;
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  background-color: ${props=>props.theme.lemuseeblack_70};
  &:hover {
    background-color: ${props=>props.theme.lemuseeblack_60};
    transition: 0.3s;
  };
  &:active {
    background-color: ${props=>props.theme.lemuseeblack_50};
    transition: 0.3s;
  }
  ${T.Pretendard24B} {
    color: ${props => props.theme.lemuseeblack_00};
  };
  path {
    stroke: ${props => props.theme.lemuseeblack_00};
  };
`;

function SubmitBtn () {
  const executiveSubmit = useRecoilValue(adminExecutiveAtom);
  const curationSubmit = useRecoilValue(adminCurationAtom);
  const memberSubmit = useRecoilValue(adminMemberStateAtom);
  const recruitingSubmit = useRecoilValue(adminRecruitingAtom);


  const setMemberStateChanged = useSetRecoilState(adminMemberStateChangesAtom);

  /**변경 사항 저장 및 저장 여부 confirm */
  const saveHandler = () => {
    let save = window.confirm("변경 사항을 저장하시겠습니까?");
    if (save) {
      //변경 사항 저장, 변경 사항 저장 성공 시
      window.alert("변경 사항이 저장되었습니다.");
      setMemberStateChanged([]);
    };
  };

  return (
    <Button onClick={saveHandler} type="submit">
      <T.Pretendard24B>Save Changes</T.Pretendard24B>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 15H27M27 15C23 14 20.5 12 19 8M27 15C23 16 20.5 19 19 22" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Button>
  )
};

export default SubmitBtn;