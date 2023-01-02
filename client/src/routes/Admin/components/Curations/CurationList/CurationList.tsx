import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { adminCurationAtom, adminCurationFileAtom } from "../../../../../storage/admin";
import dummyCuration from "../../../../../assets/dummyData/dummyCurationGET.json";
import { useEffect } from "react";
import * as T from "../../../../../GlobalComponents/Text/Text";
import CurationItem from "../CurationItem/CurationItem";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const AddNewCurationBtn = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: dashed 2px ${props => props.theme.lemuseeblack_60};
  background-color: ${props => props.theme.lemuseeblack_20};
  margin: 0;
  padding: 0;
  ${T.Pretendard15M} {
    color: ${props => props.theme.lemuseeblack_60};
  };
`;



function CurationList () {
  const [curationData, setCurationData] = useRecoilState(adminCurationAtom);
  const setCurationFile = useSetRecoilState(adminCurationFileAtom);
  /**curation을 추가하는 버튼에 할당된 함수. onClcik 시 recoil adminCurationAtom에 빈 객체를 하나 추가함 */
  const handleNewCuration = () => {
    const data = [...curationData, {cardNum:curationData.length, title:undefined, contents: undefined, imgData: undefined}]
    setCurationData(data);
  };

  useEffect(()=> {
    const initialData = dummyCuration.result.items;
    setCurationData(initialData);
    setCurationFile(initialData.map(item => item.imgData));
  }, []);

  return (
    <>
      <List>
        <>
          {
            curationData && curationData.map((item, index)=>(
              <CurationItem key={item.cardNum} {...item} index={index}/>
            ))
          }
          <AddNewCurationBtn onClick={handleNewCuration}>
            <T.Pretendard15M>Click here to add a new curation.</T.Pretendard15M>
          </AddNewCurationBtn>
        </>
      </List>
    </>
  )
};

export default CurationList;