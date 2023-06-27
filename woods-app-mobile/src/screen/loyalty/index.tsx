import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../navigation/routes';
import { Loyalty } from './loyalty';

const Stack = createStackNavigator();
export const LoyaltyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.LoyaltyLanding} headerMode="none">
      <Stack.Screen name={Route.LoyaltyLanding} component={Loyalty} />
    </Stack.Navigator>
  );
};
