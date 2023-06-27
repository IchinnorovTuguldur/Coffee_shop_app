import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Route } from '../../navigation/routes';
import { AddNewCardScreen } from './add-new-card-screen';
import { MyCartScreen } from './my-cart-screen';
import { PaymentOptionsScreen } from './payment-options-screen';
import { UpdateCardInformationScreen } from './update-card-information-screen';

const Stack = createStackNavigator();

export const CheckoutStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.MyCart} headerMode="none" screenOptions={{ gestureEnabled: false }}>
      <Stack.Screen name={Route.MyCart} component={MyCartScreen} />
      <Stack.Screen name={Route.PaymentOptions} component={PaymentOptionsScreen} />
      <Stack.Screen name={Route.AddNewCard} component={AddNewCardScreen} />
      <Stack.Screen name={Route.UpdateCardInfo} component={UpdateCardInformationScreen} />
    </Stack.Navigator>
  );
};
