import { useAppSelector } from '../../hooks';
import { QuestionBox } from '../../components';

const QuestionContainer = () => {
  const { questions } = useAppSelector((state) => state.form);

  return (
    <div>
      {questions.map((question) => (
        <QuestionBox key={question.id} id={question.id} />
      ))}
    </div>
  );
};

export default QuestionContainer;
