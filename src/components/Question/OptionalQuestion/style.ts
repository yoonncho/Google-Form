import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Wrapper = styled.div<{ isLast: boolean }>`
  display: flex;
  height: 42px;
  margin-top: 10px;

  .dropdown-option {
    ${({ theme }) => theme.flexCenter}
    font-size: 14px;
    width: 42px;
    height: 42px;
  }

  input {
    color: ${({ isLast, theme }) => (isLast ? theme.color.border_gray2 : theme.color.black)};
    font-size: 14px;
    width: 84%;
    border: none;

    &:hover {
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 1px solid ${({ theme }) => theme.color.border_gray};
    }

    &:focus {
      background: transparent;
      transition: 0.1s ease;
      border-bottom: 2px solid ${({ theme }) => theme.color.purple};
    }
  }

  .preview-option {
    font-size: 14px;
    ${({ theme }) => theme.flexCenter}
  }
`;

export const useStyles = makeStyles({
  root: {
    '& svg': {
      width: '24px',
      height: '24px',
    },
    '&$checked': {
      color: `${theme.color.purple}`,
    },
  },
  checked: {},
});
