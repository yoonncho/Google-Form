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
  height: 280px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;

  input {
    border: none;
  }

  .question {
    display: flex;
    align-items: center;
  }

  .question-input {
    background: ${theme.color.gray};
    width: 400px;
    height: 48px;
    padding: 10px;
    font-size: 16px;
    margin-right: 60px;
    border: 1px solid ${theme.color.gray};

    &::placeholder {
      color: ${theme.color.black};
    }
  }

  hr {
    margin-top: 152px;
    border: 1px solid ${theme.color.borderGray};
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
