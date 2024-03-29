import { Radio, Checkbox } from '@material-ui/core';
import { Wrapper, useStyles } from './style';
import { QUESTION_TYPES } from '../../../const';
import { useDispatch } from 'react-redux';
import { questionActions } from '../../../slices';
import { useLocation } from 'react-router-dom';

interface QuestionProps {
  type: number;
  questionId: string;
  optionId: number;
  optionContent: string;
  isLast: boolean;
  isAnswer?: boolean;
}

const OptionalQuestion = ({ type, optionId, questionId, optionContent, isLast, isAnswer }: QuestionProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const isPreview = location.pathname === '/preview';
  const isResult = location.pathname === '/result';

  const handleAddOption = () => {
    isLast && dispatch(questionActions.addOption({ id: questionId, optionId }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(questionActions.setOptionContent({ id: questionId, optionId, optionContent: e.target.value }));
  };

  const isChecked = () => {
    if (isPreview || isResult) return isAnswer;
    else return false;
  };

  const isDisabled = () => {
    if (isResult) return true;
    else return false;
  };

  const showOptionButton = () => {
    switch (type) {
      case QUESTION_TYPES.ONE_CHOICE:
        return (
          <Radio
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onClick={() => dispatch(questionActions.markOneAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return (
          <Checkbox
            classes={{ root: classes.root, checked: classes.checked }}
            disabled={isDisabled()}
            onChange={() => dispatch(questionActions.markMultipleAnswer({ id: questionId, optionId, isAnswer }))}
            value={String(optionId)}
            checked={isChecked()}
          />
        );
      case QUESTION_TYPES.DROP_DOWN:
        return <div className="dropdown-option">{optionId}</div>;
      default:
        return;
    }
  };

  return (
    <Wrapper isLast={isLast}>
      {showOptionButton()}
      {isPreview || isResult ? (
        <div className="preview-option">{optionContent}</div>
      ) : (
        <input type="text" value={optionContent} onChange={handleContentChange} onClick={handleAddOption} />
      )}
    </Wrapper>
  );
};

export default OptionalQuestion;
