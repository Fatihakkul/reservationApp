import { StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from './colors';

export const borders = StyleSheet.create({
  borderBottomline: {
    borderBottomWidth: 0.5,
    borderColor: colors.GRAY_450,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.white,
  },
  borderGray_750: {
    borderWidth: 1,
    borderColor: colors.GRAY_450,
  },
  borderBlack_15: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)"
  },
  borderGray_250: {
    borderWidth: 1,
    borderColor: colors.GRAY_250,
  },
  borderPastel: {
    borderWidth: 1,
    borderColor: colors.pastel,
  },
  border2x: {
    borderWidth: 2,
    borderColor: '#292B37',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.pastel,
  },
  borderBottom2x: {
    borderBottomWidth: 2,
    borderColor: colors.pastel,
  },
  borderBottom4x: {
    borderBottomWidth: 4,
    borderColor: colors.pastel,
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: colors.pastel,
  },
  borderLeft2x: {
    borderLeftWidth: 2,
    borderColor: colors.pastel,
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: colors.pastel,
  },
  borderRight2x: {
    borderRightWidth: 2,
    borderColor: colors.pastel,
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: colors.pastel,
  },
  borderTop2x: {
    borderTopWidth: 2,
    borderColor: colors.pastel,
  },
  radius: {
    borderRadius: scale(6),
  },
  radius2x: {
    borderRadius: 15,
  },
  radius3x: {
    borderRadius: 30,
  },
  sradius: {
    borderRadius: scale(3),
  },
  radiusStart: {
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 10,
  },
  mCircle: {
    width: 12,
    height: 12,
    borderRadius: 12,
  },
});
