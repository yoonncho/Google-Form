import { useState } from 'react';
import { useInput } from '../../hooks';
import Dropdown from '../Dropdown';
import { Wrapper, useStyles } from './style';
import { Switch } from '@material-ui/core';
import { TrashIcon, CopyIcon } from '../../assets';
import { OptionalQuestion } from '../Question';

const QuestionBox = () => {
  const classes = useStyles();
  const question = useInput('');
  const [isNecessary, setIsNecessary] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNecessary(e.target.checked);
  };

  return (
    <Wrapper>
      <div className="question">
        <input
          className="question-input"
          type="text"
          placeholder="질문"
          value={question.value}
          onChange={question.onChange}
        />
        <Dropdown />
      </div>
      <OptionalQuestion type="radio" />
      <hr />
      <div className="settings">
        <img src={CopyIcon} alt="copy" />
        <img src={TrashIcon} alt="trash" />
        <div className="switch-label">필수</div>
        <Switch className={classes.colorSecondary} checked={isNecessary} onChange={handleChange} />
      </div>
    </Wrapper>
  );
};

export default QuestionBox;
