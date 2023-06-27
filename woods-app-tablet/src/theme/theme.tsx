import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from './colors';
declare module 'styled-components' {
  export interface DefaultTheme {
    baseSpace: number;
  }
}

export const DEFAULT = {
  baseSpace: 4,
  colors,
};

export const Theme = ({ children }: { children: any }) => {
  return <ThemeProvider theme={DEFAULT}>{children}</ThemeProvider>;
};
