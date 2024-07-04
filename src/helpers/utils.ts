import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

type TSizes = {
  deviceWidth: number;
  deviceHeight: number;
};

export const deviceLayoutMetric: TSizes = {
  deviceWidth: width,
  deviceHeight: height,
};

export const isSmallDevice = deviceLayoutMetric.deviceHeight < 685;