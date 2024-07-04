import {TTabs} from '../types';
import Svg from '../../assets/svg';

export const tabs: Array<TTabs> = [
  {
    name: 'Home',
    label: 'Ana Sayfa',
    icon: Svg.HomeIcon,
    fillIcon: Svg.FillHomeIcon,
  },
  {
    name: 'ReservationMap',
    label: 'Map',
    icon: Svg.HomeIcon,
    fillIcon: Svg.FillHomeIcon,
  },
];

export const FONTFAMILY = {
  BOLD: 'Sailec-Bold',
  MEDIUM: 'Sailec-Medium',
  REGULAR: 'Sailec-Regular',
  THIN: 'Sailec-Thin',
};
