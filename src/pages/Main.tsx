import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from '../components';
import { QuestionContainer } from '../containers';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

const Main = () => {
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
      <QuestionContainer />
      <SideMenu info={info} />
    </Wrapper>
  );
};

export default Main;
