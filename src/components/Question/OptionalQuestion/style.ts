import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
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
    font-size: 14px;
    width: 84%;

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
`;

export const useStyles = makeStyles({
  root: {
    '& svg': {
      width: '24px',
      height: '24px',
    },
  },
});
