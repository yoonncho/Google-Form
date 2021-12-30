import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TitleBox } from '../components';
import { PreviewContainer } from '../containers';
import { useAppSelector } from '../hooks';
import { questionActions } from '../slices';
import { Wrapper } from './Main';

const Preview = () => {
  const dispatch = useDispatch();
  const form = useAppSelector((state) => state.form);
  const { questions } = form;

  const handleReset = () => {
    dispatch(questionActions.resetAnswer());
  };

  return (
    <Wrapper style={{ flexDirection: 'column', alignItems: 'center' }}>
      <div className="question">
        <TitleBox info={form.form} />
        {questions.map((question) => (
          <PreviewContainer key={question.id} questionId={question.id} />
        ))}
      </div>
      <Buttons>
        <Link to={'/result'} style={{ textDecoration: 'none' }}>
          <div className="submit-button">제출</div>
        </Link>
        <div className="reset-button" onClick={handleReset}>
          양식 지우기
        </div>
      </Buttons>
    </Wrapper>
  );
};

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 768px;
  justify-content: space-between;
  margin-top: 20px;

  .submit-button {
    cursor: pointer;
    font-size: 16px;
    padding: 10px 0;
    width: 80px;
    border-radius: 5px;
    ${({ theme }) => theme.flexCenter}
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.purple};
  }

  .reset-button {
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.color.purple};
  }
`;

export default Preview;
