import { makeStyles, createStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';
import { theme as styleTheme } from '../../styles/theme';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(26),
      borderRadius: '4px',
      fontSize: '16px',
      border: `1px solid ${styleTheme.color.border_gray}`,
      marginTop: '20px',

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

export const Wrapper = styled.div`
  display: block;

  .menu-content {
    width: 150px;
    overflow: hidden;
    color: ${styleTheme.color.black};
  }
`;
