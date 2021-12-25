import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { theme } from '../../styles/theme';

export const useStyles = makeStyles({
  colorSecondary: {
    '& .MuiSwitch-colorSecondary.Mui-checked': {
      color: `${theme.color.purple}`,
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: `${theme.color.purple}`,
    },
  },
});

export const Wrapper = styled.div`
  background: ${theme.color.white};
  width: 768px;
  height: 240px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  height: auto !important;

  input {
    border: none;
  }

  .question {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .question-input {
    background: ${theme.color.gray};
    width: 440px;
    height: 48px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid ${theme.color.border_gray2};

    &:focus {
      transition: 0.1s ease;
      border-bottom: 2px solid ${({ theme }) => theme.color.purple};
    }

    &::placeholder {
      color: ${theme.color.border_gray2};
    }
  }

  hr {
    margin-top: 60px;
    border: 1px solid ${theme.color.border_gray};
  }

  .settings {
    display: flex;
    align-items: center;
    justify-content: end;

    img {
      cursor: pointer;
      margin-right: 16px;
    }

    .switch-label {
      font-size: 14px;
    }
  }
`;
