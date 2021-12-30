import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from '../components';
import { QuestionContainer } from '../containers';
import { useAppSelector } from '../hooks';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { questionActions } from '../slices';

const Main = () => {
  const { form, questions } = useAppSelector((state) => state.form);
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    title: form.title,
    detail: '',
  });

  const handleInfo = (name: string, value: string) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const getQuestionList = () => {
    return questions.map((question, idx) => (
      <Draggable key={question.id} draggableId={question.id} index={idx}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps}>
            <QuestionContainer key={question.id} questionId={question.id} provided={provided} />
          </div>
        )}
      </Draggable>
    ));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    dispatch(questionActions.reorderQuestion({ firstIdx: result.source.index, secondIdx: result.destination.index }));
  };

  return (
    <Wrapper>
      <TitleBox info={info} handleChange={handleInfo} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef}>
              {getQuestionList()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <SideMenu info={info} />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 140px;
  position: relative;
  margin-bottom: 100px;
`;

export default Main;
