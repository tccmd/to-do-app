import { extendTheme } from '@chakra-ui/react';

const chakraTheme = extendTheme({
  colors: {
    black: {
      100: '#FF0000',
      200: '#ffffff',
      300: '#dddddd',
      400: '#bbbbbb',
      500: '#000000',
      600: '#333333',
      700: '#555555',
      800: '#FF00FF',
      900: '#FF007F',
    },
    rainbow: {
      100: '#FF0000',
      200: '#FF7F00',
      300: '#FFFF00',
      400: '#00FF00',
      500: '#0000FF',
      600: '#4B0082',
      700: '#8B00FF',
      800: '#FF00FF',
      900: '#FF007F',
    },
  },
});

export default chakraTheme;
