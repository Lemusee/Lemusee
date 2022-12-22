import { useForm } from "react-hook-form";
import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "../DraggableCard/DraggableCard";
import styled from "styled-components";
import { adminMemberStateAtom, IAdminMember } from "../../../../atoms";
import { useSetRecoilState } from "recoil";
import * as T from "../../../../GlobalComponents/Text/Text";


const Wrapper = styled.div`
  width: 100%;
  min-width: 240px;
  border-radius: 15px;
  min-height: 106px;
  display: flex;
  flex-direction: column;
  ${T.Pretendard13M} {
    text-align: center;
    padding: 15px;
    color: ${props=>props.theme.lemuseeblack_70};
  };
`;

interface IAreaProps {
  isDraggingOver:boolean;
  isDraggingFromThis:boolean;
};

const Area = styled.div<IAreaProps>`
  background-color: ${props => props.isDraggingOver ? props.theme.lemuseeblack_50 : props.isDraggingFromThis ? props.theme.lemuseeblack_40 : "transparent"};
  flex-grow: 1;
  transition: background-color .3s ease-in-out;
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px 25px 20px 25px;
`;

interface IBoardProps {
  items:IAdminMember[];
  boardId: string;
};

function Board ({items, boardId}:IBoardProps) {
  return (
    <Wrapper>
      <T.Pretendard13M>{boardId}</T.Pretendard13M>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
            {items.map((item, index) => (
              <DraggableCard key={item.id} index={index} itemId={item.id} itemText={item.nickname} boardId={boardId}/>
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  )
}

export default Board;