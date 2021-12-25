import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { useInput } from '../../../hooks';
import { QUESTION_TYPES } from '../../../const';

interface QuestionProps {
  type: number;
  questionId: number;
}

const OptionQuestion = ({ type, questionId }: QuestionProps) => {
  const classes = useStyles();
  const option = useInput(`옵션 ${questionId}`);

  const showOptionButton = () => {
    switch (type) {
      case QUESTION_TYPES.ONE_CHOICE:
        return <Radio className={classes.root} disabled />;
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <Checkbox className={classes.root} disabled />;
      case QUESTION_TYPES.DROP_DOWN:
        return <div className="dropdown-option">{questionId}</div>;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      {showOptionButton()}
      <input type="text" value={option.value} onChange={option.onChange} />
    </Wrapper>
  );
};

export default OptionQuestion;
