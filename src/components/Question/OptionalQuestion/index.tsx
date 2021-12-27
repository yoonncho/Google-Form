import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { useInput } from '../../../hooks';
import { QUESTION_TYPES } from '../../../const';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../../slices';
import { useEffect, useRef } from 'react';

interface QuestionProps {
  type: number;
  questionId: number;
  optionId: number;
  isLast: boolean;
}

const OptionalQuestion = ({ type, optionId, questionId, isLast }: QuestionProps) => {
  const classes = useStyles();
  const option = useInput(isLast ? '옵션 추가' : `옵션 ${optionId}`);
  const dispatch = useDispatch();
  const isMounted = useRef(false); // 첫 동작 방지 위함

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  useEffect(() => {
    if (isMounted.current) {
      dispatch(questionActions.setOptionContent({ id: questionId, optionId: optionId, optionContent: option.value }));
    } else {
      isMounted.current = true;
    }
  }, [option.value]);

  const showOptionButton = () => {
    switch (type) {
      case QUESTION_TYPES.ONE_CHOICE:
        return <Radio className={classes.root} disabled />;
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <Checkbox className={classes.root} disabled />;
      case QUESTION_TYPES.DROP_DOWN:
        return <div className="dropdown-option">{optionId}</div>;
      default:
        return;
    }
  };

  return (
    <Wrapper isLast={isLast}>
      {showOptionButton()}
      <input type="text" value={option.value} onChange={option.onChange} onClick={handleAddOption} />
    </Wrapper>
  );
};

export default OptionalQuestion;
