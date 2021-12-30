import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from '../components';
import { QuestionContainer } from '../containers';
import { useAppSelector } from '../hooks';

const Main = () => {
  const { form, questions } = useAppSelector((state) => state.form);

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

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
  position: relative;
  margin-bottom: 100px;
`;

export default Main;
