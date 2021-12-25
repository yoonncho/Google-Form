import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, SideMenu } from './components';
import { QuestionContainer } from './containers';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

const App = () => {
  const [info, setInfo] = useState({
    formTitle: '',
    formDetail: '',
  });

  return (
    <Wrapper>
      <TitleBox info={info} setInfo={setInfo} />
      <QuestionContainer />
      <SideMenu info={info} />
    </Wrapper>
  );
};

export default App;
