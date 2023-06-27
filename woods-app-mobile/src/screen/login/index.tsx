import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route } from '../../navigation/routes';
import { AuthLandingScreen } from './auth-landing-screen';
import { VerifyPhoneNumberScreen } from './verify-phone-number-screen';
import { VerifyVerificationCodeScreen } from './verify-verification-code-screen';
import { LoginSuccessScreen } from './login-success-screen';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Route.AuthLanding} headerMode="none">
      <Stack.Screen name={Route.AuthLanding} component={AuthLandingScreen} />
      <Stack.Screen name={Route.VerifyPhoneNumberScreen} component={VerifyPhoneNumberScreen} />
      <Stack.Screen name={Route.VerifyVerificationCodeScreen} component={VerifyVerificationCodeScreen} />
      <Stack.Screen name={Route.LoginSuccessScreen} component={LoginSuccessScreen} />
    </Stack.Navigator>
  );
};
