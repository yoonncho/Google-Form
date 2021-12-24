import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { useInput } from '../../../hooks';

type QuestionProps = {
  type: 'radio' | 'check' | 'dropdown';
};

const OptionQuestion = ({ type }: QuestionProps) => {
  const classes = useStyles();
  const option = useInput('옵션 1');

  const showOptionButton = () => {
    switch (type) {
      case 'radio':
        return <Radio className={classes.root} disabled />;
      case 'check':
        return <Checkbox className={classes.root} disabled />;
      case 'dropdown':
        return <div className="dropdown-option">1</div>;
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
