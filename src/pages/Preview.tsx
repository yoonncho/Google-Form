import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TitleBox } from '../components';
import { PreviewContainer } from '../containers';
import { useAppSelector } from '../hooks';
import { Wrapper } from './Main';

const Preview = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  return (
    <Wrapper>
      <TitleBox info={form.form} />
      {questions.map((question) => (
        <PreviewContainer key={question.id} questionId={question.id} />
      ))}
      <Link to={'/result'} style={{ textDecoration: 'none' }}>
        <Button>제출</Button>
      </Link>
    </Wrapper>
  );
};

const Button = styled.div`
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 0;
  width: 80px;
  border-radius: 5px;
  cursor: pointer;
  ${({ theme }) => theme.flexCenter}
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.purple};
`;

export default Preview;
