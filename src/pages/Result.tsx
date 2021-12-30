import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { TitleBox } from '../components';
import { PreviewContainer } from '../containers';

const Result = () => {
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  return (
    <Wrapper>
      <div className="page-title">응답 내용</div>
      <TitleBox info={form.form} />
      {questions.map((question) => (
        <PreviewContainer key={question.id} questionId={question.id} />
      ))}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 60px;
  position: relative;
  margin-bottom: 100px;

  .page-title {
    font-size: 38px;
    margin-bottom: 40px;
  }
`;

export default Result;
