import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

const customIconButton = defineStyle({
  // background: 'orange.500',
  color: 'black.600',
  fontFamily: 'serif',
  fontWeight: 'normal',

  // let's also provide dark mode alternatives
  _dark: {
    // background: 'orange.300',
    // color: 'orange.800',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { customIconButton },
});

const bold = defineStyle({
  borderWidth: 4, // change the thickness of the spinner
});

export const spinnerTheme = defineStyleConfig({
  variants: { bold },
});

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
  components: {
    Button: buttonTheme,
    Spinner: spinnerTheme,
  },
});

export default chakraTheme;