import { extendTheme } from "native-base";

export const COLORS = {
    PRIMARY: '#0165FF',
    SECONDARY: '#fff',
  };

export const FONTS = {
    100: {
      normal: 'Montserrat-Thin',
      italic: 'Montserrat-ThinItalic',
    },
    200: {
      normal: 'Montserrat-ExtraLight',
      italic: 'Montserrat-ExtraLightItalic',
    },
    300: {
      normal: 'Montserrat-Light',
      italic: 'Montserrat-LightItalic',
    },
    400: {
      normal: 'Montserrat-Regular',
      italic: 'Montserrat-Italic',
    },
    500: {
      normal: 'Montserrat-Medium',
      italic: 'Montserrat-MediumItalic',
    },
    600: {
      normal: 'Montserrat-SemiBold',
      italic: 'Montserrat-SemiBoldItalic',
    },
    700: {
      normal: 'Montserrat-Bold',
      italic: 'Montserrat-BoldItalic',
    },
    800: {
      normal: 'Montserrat-ExtraBold',
      italic: 'Montserrat-ExtraBoldItalic',
    },
    900: {
      normal: 'Montserrat-Black',
      italic: 'Montserrat-BlackItalic',
    },
  };
  export const CustomTheme = extendTheme({
    colors: COLORS,
    fontConfig: {
      Montserrat: FONTS,
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
    },
  });