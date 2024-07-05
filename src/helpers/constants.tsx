import {TTabs} from '../types';
import Svg from '../../assets/svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { theme } from '../theme';

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
    icon:()=> <FontAwesome name='map-o' size={20} />,
    fillIcon:()=> <FontAwesome name='map-o' size={20} color={theme.colors.mainColor}/>,
  },
];

export const mapStandardStyle = [
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];


