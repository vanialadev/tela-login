import React from 'react'

import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'

import { ThemeProvider as EmotionProvider } from 'emotion-theming'

import theme from '../styles/theme'

const ThemeContainer: React.FC = ({children}) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
}

export default ThemeContainer;
