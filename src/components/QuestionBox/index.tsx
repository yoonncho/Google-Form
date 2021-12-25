import { useState } from 'react';
import { useAppSelector, useInput } from '../../hooks';
import Dropdown from '../Dropdown';
import { Wrapper, useStyles } from './style';
import { Switch } from '@material-ui/core';
import { TrashIcon, CopyIcon } from '../../assets';
import { OptionalQuestion, NarrativeQuestion } from '../Question';
import { QUESTION_TYPES } from '../../const';

interface QuestionProps {
  id: number;
}

const QuestionBox = ({ id }: QuestionProps) => {
  const classes = useStyles();
  const question = useInput('');
  const [isNecessary, setIsNecessary] = useState<boolean>(false);
  const { type: questionType } = useAppSelector((state) => state.questions)[id];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNecessary(e.target.checked);
  };

  const getInput = () => {
    switch (questionType) {
      case QUESTION_TYPES.ONE_CHOICE:
        return <OptionalQuestion type="radio" />;
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <OptionalQuestion type="check" />;
      case QUESTION_TYPES.DROP_DOWN:
        return <OptionalQuestion type="dropdown" />;
      case QUESTION_TYPES.SHORT_ANSWER:
        return <NarrativeQuestion type="short" />;
      case QUESTION_TYPES.LONG_ANSWER:
        return <NarrativeQuestion type="long" />;
      default:
        return;
    }
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
        <Dropdown questionId={id} />
      </div>
      {getInput()}
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
