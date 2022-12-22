import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";
import { useSetRecoilState } from "recoil";
import { adminMemberStateAtom } from "../../../../atoms";

const Card = styled.div<{isDragging: boolean}>`
  background-color: ${props => props.isDragging ? props.theme.lemuseeblack_30 : props.theme.lemuseeblack_00};
  width: 186px;
  height: 40px;
  border-radius: 10px;
  border: solid 1px ${props=>props.theme.lemuseeblack_40};
  padding: 8px 10px;
  transition: background-color .3s ease-in-out;
  box-shadow: ${props => props.isDragging ? "0px 2px 15xp rgba(0,0,0,0.05)" : "none"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtn = styled.button` 
  color: ${props=>props.theme.lemuseeblack_60};
  background-size: cover;
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
`;

interface IDraggableCardProps {
  itemId:number;
  itemText:string;
  index:number;
  boardId:string;
}

function DraggableCard ({itemId, index, itemText, boardId}:IDraggableCardProps) {
  const setMemberstate = useSetRecoilState(adminMemberStateAtom);
  const onClick = () => {
    setMemberstate((allBoards) => {
      const boardCopy = [...allBoards[boardId]];
      boardCopy.splice(index, 1);
      console.log(boardCopy);
      return {
        ...allBoards,
        [boardId]:boardCopy
      }
    })
    };
  return (
    <Draggable draggableId={itemId+""} index={index}>
      {(magic, snapshot) => (
        <Card 
          isDragging={snapshot.isDragging}
          ref={magic.innerRef} 
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {itemText}
          <DeleteBtn onClick={onClick}>Delete</DeleteBtn>
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard);