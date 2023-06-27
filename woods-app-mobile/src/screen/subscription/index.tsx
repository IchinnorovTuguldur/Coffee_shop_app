import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../navigation/routes';
import { Subscription } from './subscription';

const Stack = createStackNavigator();

export const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.SubscriptionLanding} headerMode="none">
      <Stack.Screen name={Route.SubscriptionLanding} component={Subscription} />
    </Stack.Navigator>
  );
};
