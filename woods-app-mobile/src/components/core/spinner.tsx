import React from 'react';
import LottieView from 'lottie-react-native';
import { useTheme } from 'styled-components';
import { fibonacci } from '../utilities';
import { StyleSheet } from 'react-native';

type SpinnerType = {
  height?: number;
  width?: number;
  size?: number;
};

export const Spinner = (props: SpinnerType) => {
  const { height, width, size } = props;
  const { baseSpace } = useTheme();

  const SpinnerStyle = StyleSheet.create({
    style: {
      height: fibonacci(height || size || 8) * baseSpace,
      width: fibonacci(width || size || 8) * baseSpace,
      justifyContent: 'center',
    },
  });
  return <LottieView source={require('../../assets/lottie/loading-spinner.json')} style={SpinnerStyle.style} autoPlay loop />;
};
