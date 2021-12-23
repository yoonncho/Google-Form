import styled from 'styled-components';
import { TitleBox } from './components';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  margin-top: 100px;
`;

const App = () => {
  return (
    <Wrapper>
      <TitleBox />
    </Wrapper>
  );
};

export default App;
