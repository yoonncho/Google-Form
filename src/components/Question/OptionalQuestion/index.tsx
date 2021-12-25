import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { useInput } from '../../../hooks';

interface QuestionProps {
  type: 'radio' | 'check' | 'dropdown';
  questionId: number;
}

const OptionQuestion = ({ type, questionId }: QuestionProps) => {
  const classes = useStyles();
  const option = useInput(`옵션 ${questionId}`);

  const showOptionButton = () => {
    switch (type) {
      case 'radio':
        return <Radio className={classes.root} disabled />;
      case 'check':
        return <Checkbox className={classes.root} disabled />;
      case 'dropdown':
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
