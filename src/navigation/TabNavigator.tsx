import React, {useCallback} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabNavigationStackParamList} from '../types';
import {screens} from '../sreen';
import CustomTabbar from '../components/custom/CustomTabbar';

const Tab = createBottomTabNavigator<TabNavigationStackParamList>();

const TabNavigator: React.FC = (): JSX.Element => {
  const tabbar = useCallback(
    (props: BottomTabBarProps) => (
      <CustomTabbar currentTabScreen={props.state.routeNames[props.state.index]} />
    ),
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
      })}
      tabBar={tabbar}>
      <Tab.Screen name="Home" component={screens.Home} />
      <Tab.Screen name="ReservationMap" component={screens.ReservationMap} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
