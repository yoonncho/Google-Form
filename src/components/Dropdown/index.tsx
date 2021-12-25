import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useStyles } from './style';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { questionActions } from '../../slices/question';
import { useDispatch } from 'react-redux';
import { QUESTION_TYPES } from '../const';

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

const Dropdown = () => {
  const classes = useStyles();
  const theme = unstable_createMuiStrictModeTheme();
  const [type, setType] = useState<unknown>(2);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value);
    dispatch(questionActions.changeType(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Select fullWidth className={classes.root} disableUnderline value={type} onChange={handleChange}>
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
