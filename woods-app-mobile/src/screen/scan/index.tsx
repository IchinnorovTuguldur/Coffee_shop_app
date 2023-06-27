import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../navigation/routes';
import { ScanScreen } from './scan-screen';

const Stack = createStackNavigator();

export const ScanStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.ScanLanding} headerMode="none">
      <Stack.Screen name={Route.ScanLanding} component={ScanScreen} />
    </Stack.Navigator>
  );
};
