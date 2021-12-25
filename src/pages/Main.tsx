import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from '../components';
import { QuestionContainer } from '../containers';
import { useAppSelector } from '../hooks';

const Main = () => {
  const { questions } = useAppSelector((state) => state.form);

  const [info, setInfo] = useState({
    formTitle: '',
    formDetail: '',
  });

  const handleInfo = (name: string, value: string) => {
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <TitleBox info={info} handleChange={handleInfo} />
      {questions.map((question) => (
        <QuestionContainer key={question.id} questionId={question.id} />
      ))}
      <SideMenu info={info} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

export default Main;
