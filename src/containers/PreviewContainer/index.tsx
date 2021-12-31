import Dropdown from '../../components/Dropdown';
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
  const isAnswer = (value: number) => selectedQuestion.answers.findIndex((item) => item === value) >= 0;

  const getOptionList = (type: number) => {
    const optionList = options?.map((option) => (
      <OptionalQuestion
        isAnswer={isAnswer(option.id)}
        key={option.id}
        questionId={questionId}
        optionId={option.id}
        type={type}
        optionContent={option.option}
        isLast={false}
      />
    ));
    return optionList;
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.ONE_CHOICE:
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return getOptionList(questionType);
      case QUESTION_TYPES.DROP_DOWN:
        return <Dropdown questionId={questionId} menus={options} />;
      case QUESTION_TYPES.SHORT_ANSWER:
        return <NarrativeQuestion type="short" questionId={questionId} />;
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion type="long" questionId={questionId} />;
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
