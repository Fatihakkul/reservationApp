import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import {screens} from '../sreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={screens.Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={screens.Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditReservation"
        component={screens.EditReservation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewReservation"
        component={screens.NewReservation}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="CityReservation"
        component={screens.CityReservations}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
