import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core';
import { theme as styleTheme } from '../../styles/theme';

const menus = [
  { id: 1, type: '단답형' },
  {
    id: 2,
    type: '장문형',
  },
  {
    id: 3,
    type: '객관식 질문',
  },
  {
    id: 4,
    type: '체크박스',
  },
  {
    id: 5,
    type: '드롭다운',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(26),
      borderRadius: '4px',
      fontSize: '16px',
      border: `1px solid ${styleTheme.color.borderGray}`,

      '& .MuiSelect-select.MuiSelect-select': {
        padding: '12px',
      },

      '& .MuiSelect-icon': {
        width: '1.6em',
        height: '1.6em',
        right: '10px',
      },
    },

    menu: {
      fontSize: '16px',
    },
  }),
);

const Dropdown = () => {
  const classes = useStyles();
  const theme = unstable_createMuiStrictModeTheme();
  const [type, setType] = useState<unknown>('단답형');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Select fullWidth className={classes.root} disableUnderline value={type} onChange={handleChange}>
        {menus.map((menu) => (
          <MenuItem key={menu.id} value={menu.type} className={classes.menu}>
            {menu.type}
          </MenuItem>
        ))}
      </Select>
    </ThemeProvider>
  );
};

export default Dropdown;
