import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { questionActions } from '../../../slices';
import { Wrapper } from './style';

interface QuestionProps {
  type: 'short' | 'long';
  questionId: string;
}

const NarrativeQuestion = ({ type, questionId }: QuestionProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';
  const questions = useAppSelector((state) => state.questions);
  const question = questions?.find((item) => item.id === questionId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setNarrativeAnswer({ id: questionId, narrativeContent: e.target.value }));
  };

  return (
    <Wrapper type={type}>
      {!isPreview && !isResult ? (
        <input type="text" disabled placeholder={type === 'short' ? '단답형 텍스트' : '장문형 텍스트'} />
      ) : (
        <input
          type="text"
          placeholder={isPreview ? '내 답변' : ''}
          value={question?.narrativeAnswer}
          onChange={handleChange}
          disabled={isResult ? true : false}
        />
      )}
    </Wrapper>
  );
};

export default NarrativeQuestion;
