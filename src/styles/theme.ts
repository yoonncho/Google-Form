import { css, DefaultTheme } from 'styled-components';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const theme: DefaultTheme = {
  color: {
    background: '#F0EBF8',
    purple: '#673AB7',
    white: '#ffffff',
    black: '#000000',
    gray: '#F8F9FA',
    borderGray: '#DADCE0',
    blue: '#4285F4',
    red: '#D93025',
  },
  flexCenter,
};
