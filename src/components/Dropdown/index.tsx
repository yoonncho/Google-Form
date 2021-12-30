import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useStyles } from './style';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { questionActions } from '../../slices';
import { useDispatch } from 'react-redux';
import { QUESTION_TYPES } from '../../const';
import { useAppSelector } from '../../hooks';

const menus = [
  { id: QUESTION_TYPES.SHORT_ANSWER, type: '단답형' },
  {
    id: QUESTION_TYPES.LONG_ANSWER,
    type: '장문형',
  },
  {
    id: QUESTION_TYPES.ONE_CHOICE,
    type: '객관식 질문',
  },
  {
    id: QUESTION_TYPES.MULTIPLE_CHOICE,
    type: '체크박스',
  },
  {
    id: QUESTION_TYPES.DROP_DOWN,
    type: '드롭다운',
  },
];

interface Props {
  questionId: string;
}

const Dropdown = ({ questionId }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = unstable_createMuiStrictModeTheme();
  const questions = useAppSelector((state) => state.questions);
  const question = questions.find((item) => item.id === questionId);
  const questionType = question?.type;

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(questionActions.changeType({ id: questionId, type: e.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Select fullWidth className={classes.root} disableUnderline value={questionType} onChange={handleChange}>
        {menus.map((menu) => (
          <MenuItem key={menu.id} value={menu.id} className={classes.menu}>
            {menu.type}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  );
};

export default Dropdown;
