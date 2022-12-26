import { useRecoilValue } from "recoil";
import { ITrackerItem } from "../../../../../Types";
import TrackerItem from "../TrackerItem/TrackerItem";
import { adminExecutiveAtom, adminCurationFileAtom, adminCurationAtom, adminRecruitingAtom, adminMemberStateChangesAtom } from "../../../../../atoms";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

function ChangesTracker () {
  const executiveChanges = useRecoilValue(adminExecutiveAtom);
  const curationFileChanges = useRecoilValue(adminCurationFileAtom);
  const curationChanges = useRecoilValue(adminCurationAtom);
  const recruitingChanges = useRecoilValue(adminRecruitingAtom);
  const memberStateChanges = useRecoilValue(adminMemberStateChangesAtom);
  const [changes, setChanges] = useState<ITrackerItem[]>();
  useEffect(() => {
    const curationTitles = curationChanges.map(item => item.title);
    setChanges([
      {
        title : "/Home/Executives",
        changes : [(executiveChanges.length > 0) && (typeof executiveChanges[0] !== "string") ? executiveChanges[0].name: ""]
      },
      {
        title: "/Home/Curations",
        changes: [...curationTitles]
      },
      {
        title: "/Members/State",
        changes: [...memberStateChanges]
      },
      {
        title: "/Recruiting",
        changes: [recruitingChanges.content]
      },
    ])
  }, [executiveChanges, curationFileChanges, curationChanges, recruitingChanges, memberStateChanges]);
  // console.log(executiveChanges[0])
  // console.log(executiveChanges, curationFileChanges, curationChanges, recruitingChanges, memberStateChanges);
  return (
      <Wrapper>
        {changes && changes.map((item) => <TrackerItem title={item.title} changes={item.changes}/>)}
      </Wrapper>
  )
};

export default ChangesTracker;