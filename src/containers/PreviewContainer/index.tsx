import { NarrativeQuestion, OptionalQuestion } from '../../components/Question';
import { QUESTION_TYPES } from '../../const';
import { useAppSelector } from '../../hooks';
import { Wrapper } from './style';

interface SolveProps {
  questionId: string;
}

const PreviewContainer = ({ questionId }: SolveProps) => {
  const { questions } = useAppSelector((state) => state.form);
  const selectedQuestion = questions.find((item) => item.id === questionId);
  if (!selectedQuestion) return null;
  const { type: questionType, options, questionContent, isNecessary } = selectedQuestion;

  const getOptionList = (type: number) => {
    const optionList = options?.map((option) => (
      <OptionalQuestion
        key={option.id}
        questionId={questionId}
        optionId={option.id}
        type={type}
        optionContent={option.optionContent}
        isLast={false}
      />
    ));
    return optionList;
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.ONE_CHOICE:
      case QUESTION_TYPES.MULTIPLE_CHOICE:
      case QUESTION_TYPES.DROP_DOWN:
        return getOptionList(questionType);
      case QUESTION_TYPES.SHORT_ANSWER:
        return <NarrativeQuestion type="short" />;
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion type="long" />;
      default:
        return;
    }
  };

  return (
    <Wrapper isNecessary={true}>
      <span className="title">{questionContent}</span>
      {isNecessary && <span className="title_necessary">*</span>}
      {getInput()}
    </Wrapper>
  );
};

export default PreviewContainer;
