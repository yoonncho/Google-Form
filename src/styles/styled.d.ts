import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      purple: string;
      white: string;
      black: string;
      gray: string;
      blue: string;
      red: string;
    };
    flexCenter: css;
  }
}
