import {StyleSheet} from 'react-native';
import {deviceLayoutMetric} from '../helpers/utils';
import {scale, verticalScale} from 'react-native-size-matters';

export const layout = StyleSheet.create({
  spaddingBottom: {
    paddingBottom: 5,
  },
  paddingBottom: {
    paddingBottom: 15,
  },
  paddingTop: {
    paddingTop: 15,
  },
  paddingTop2X: {
    paddingTop: 30,
  },
  padding: {
    padding: 15,
  },
  paddingRight: {
    paddingRight: 15,
  },
  padding2X: {
    padding: scale(30),
  },
  paddingY_15: {
    paddingVertical: verticalScale(15),
  },
  paddingY: {
    paddingVertical: 10,
  },
  paddingX_20: {
    paddingHorizontal: scale(20),
  },
  paddingX: {
    paddingHorizontal: scale(10),
  },
  spaddingY: {
    paddingVertical: 6,
  },
  xspaddingY: {
    paddingVertical: 2,
  },
  paddingY2X: {
    paddingVertical: verticalScale(30),
  },
  paddingX2X: {
    paddingHorizontal: scale(30),
  },
  margin: {
    margin: scale(15),
  },
  margin2X: {
    margin: scale(30),
  },
  marginY: {
    marginVertical: verticalScale(15),
  },
  marginX: {
    marginHorizontal: scale(15),
  },
  marginY2X: {
    marginVertical: verticalScale(30),
  },
  marginX2X: {
    marginHorizontal: scale(30),
  },
  marginTop: {
    marginTop: verticalScale(15),
  },
  smarginBottom: {
    marginBottom: verticalScale(10),
  },
  marginBottom: {
    marginBottom: verticalScale(15),
  },
  marginLeft: {
    marginLeft: scale(15),
  },
  marginRight: {
    marginRight: scale(15),
  },
  marginTop2X: {
    marginTop: verticalScale(30),
  },
  marginBottom2X: {
    marginBottom: verticalScale(30),
  },
  marginLeft2X: {
    marginLeft: scale(30),
  },
  marginRight2X: {
    marginRight: scale(30),
  },
  sgap: {
    gap: 5,
  },
  gap: {
    gap: 10,
  },
  gap2X: {
    gap: 20,
  },
  gap3X: {
    gap: 30,
  },
  gap4X: {
    gap: 40,
  },
  pRelative: {
    position: 'relative',
  },
  pAbsolute: {
    position: 'absolute',
  },
  dFlex: {
    display: 'flex',
  },
  dNone: {
    display: 'none',
  },
  w100: {
    width: '100%',
  },
  w50: {
    width: '50%',
  },
  h100: {
    height: '100%',
  },
  h90: {
    height:'90%'
  },
  h50: {
    height: '50%',
  },
  flex: {
    flex: 1,
  },
  flex2x: {
    flex: 2,
  },
  flex3x: {
    flex: 3,
  },
  flex4x: {
    flex: 4,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSCenter: {
    alignSelf: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  width90: {
    width: deviceLayoutMetric.deviceWidth * 0.9,
  },
  width90_Layout: {
    width: '90%',
  },
  widthDevice: {
    width: deviceLayoutMetric.deviceWidth,
  },
  backgroundFull: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },
});
