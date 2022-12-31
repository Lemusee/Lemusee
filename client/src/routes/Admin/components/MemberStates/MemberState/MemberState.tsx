import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState, useSetRecoilState } from "recoil";
import dummyMemberState from "../../../../../assets/dummyData/dummyMemberState.json";
import { adminMemberStateAtom, adminMemberStateChangesAtom } from "../../../../../storage/admin";
import { useEffect } from "react";
import Board from "../Board/Board";

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap:10px;
  grid-template-columns: repeat(4, minmax(240px, auto));
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  > div {
    background-color: ${props=>props.theme.lemuseeblack_30};
    :nth-child(1) {
      background-color: transparent;
      grid-column: 1 / span 4;
      > div {
        background-color: transparent;
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(5, 186px);
        justify-items: center;
        gap: 8px;
      };
    };
    :nth-child(2) {
      grid-column: 1 / span 4;
      > div {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(5, 186px);
        justify-items: center;
        gap: 8px;
      };
    :nth-child(n+3):nth-child(-n+6) {
      background-color: ${props=>props.theme.lemuseeblack_50};
      };
    };
  };
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

function MemberState () {
  const [memberState, setMemberState] = useRecoilState(adminMemberStateAtom);
  const setMemberStateChanged = useSetRecoilState(adminMemberStateChangesAtom);
  /**initial data setting */
  useEffect(() => {
    const memberdata = [...dummyMemberState.result];
    const filteredMemberdata = {
      "등록 대기": [...memberdata.filter(item => item.team === null)],
      "비활동 회원": [...memberdata.filter(item => item.team === "inactive")],
      "큐레이터": [...memberdata.filter(item => item.isChief && item.team === "curator")],
      "컨텐츠 팀장": [...memberdata.filter(item => item.isChief && item.team === "content")],
      "컬처 팀장": [...memberdata.filter(item => item.isChief && item.team === "culture")],
      "어드민 팀장 (관리자)": [...memberdata.filter(item => item.isChief && item.team === "admin")],
      "큐레이터 팀": [...memberdata.filter(item => !item.isChief && item.team === "curator")],
      "컨텐츠 팀": [...memberdata.filter(item => !item.isChief && item.team === "content")],
      "컬처 팀": [...memberdata.filter(item => !item.isChief && item.team === "culture")],
      "어드민 팀": [...memberdata.filter(item => !item.isChief && item.team === "admin")]
    };
    setMemberState({...filteredMemberdata});
  }, []);

  const onDragEnd = (info: DropResult) => {
    const {destination, source} = info;
    if(!destination) return;
    if(destination?.droppableId === source?.droppableId) {
      setMemberState((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId] : boardCopy
        };
      })
    };
    if(destination.droppableId !== source.droppableId){
      const obj = memberState[source.droppableId][source.index];
      setMemberStateChanged(prev => {return [...prev, obj.nickname]});
      setMemberState((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const targetBoard = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        targetBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]:sourceBoard,
          [destination.droppableId]:targetBoard,
        }
      })
    };
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(memberState).map((boardId) => <Board boardId={boardId} key={boardId} items={memberState[boardId]} />)}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  )
};

export default MemberState;