import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import 'yup-phone';
import { Button, Grid, SafeAreaScreen, Text } from '../../components';
import { Flow, useFlow } from '../../components/flow/flow';
import { LoginSuccessScreen } from './login-success-screen';
import { VerifyPhoneNumberScreen } from './verify-phone-number-screen';
import { VerifyVerificationCodeScreen } from './verify-verification-code-screen';

const LandingScreen = () => {
  const navigation = useNavigation();
  const { onNext } = useFlow();
  const goBack = () => navigation.goBack();
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
      <Text alignment="center">Please register with your phone number.</Text>
      <KeyboardAvoidingView keyboardVerticalOffset={120} behavior="padding">
        <Grid columns={2} gap={4}>
          <Button onClick={goBack}>Cancel</Button>
          <Button onClick={onNext}>Next</Button>
        </Grid>
      </KeyboardAvoidingView>
    </View>
  );
};

export const AuthLandingScreen = () => {
  return (
    <Flow.Provider>
      <SafeAreaScreen size={[7, 4]}>
        <Flow.Content>
          <LandingScreen />
          <VerifyPhoneNumberScreen />
          <VerifyVerificationCodeScreen />
          <LoginSuccessScreen />
        </Flow.Content>
      </SafeAreaScreen>
    </Flow.Provider>
  );
};
