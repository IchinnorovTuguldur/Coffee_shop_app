import React from 'react';
import { Center } from '../../components';
import LottieView from 'lottie-react-native';

export const CheckoutPaymentSuccessful = () => {
  return (
    <Center flex={1}>
      <LottieView source={require('../../assets/lottie/successful.json')} style={{ height: 75, width: 75 }} autoPlay loop={false} />
    </Center>
  );
};
