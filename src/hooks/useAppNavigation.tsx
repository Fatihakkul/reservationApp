import { useDispatch, useSelector } from 'react-redux';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {
  RootStackParamList,
} from '../types/RootStackParamList';


import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabNavigationStackParamList } from '../types';
import { AppDispatch, RootState } from '../store/store';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


type TabNavigationNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<TabNavigationStackParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

export const useAppNavigation: () => CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  TabNavigationNavigationProp
> = useNavigation;
