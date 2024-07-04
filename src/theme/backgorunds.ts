import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const backgorunds = StyleSheet.create({
  bgPrimaryColor: {
    backgroundColor: colors.mainColor,
  },
  bgWhite: {
    backgroundColor: colors.white,
  },
  bgRgba: {
    backgroundColor: colors.rgba,
  },
  bgGray: {
    backgroundColor: colors.gray,
  },
  bgDarkGray: {
    backgroundColor: colors.darkGray,
  },
  bgTransparent: {
    backgroundColor: colors.transparent,
  },
  bgDarkBlue: {
    backgroundColor: colors.darkBlue,
  },
  bgDLightBlue: {
    backgroundColor: colors.dlightBlue,
  },
  bgGRAY_250: {
    backgroundColor: colors.GRAY_250,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  shadow2X: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
