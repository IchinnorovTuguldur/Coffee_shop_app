import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { fibonacci } from '../utilities';

type SpacerType = {
  horizontal?: boolean;
  size?: number;
};

export const Spacer = (props: SpacerType) => {
  const { horizontal, size } = props;
  const { baseSpace } = useTheme();
  return (
    <View
      style={{
        height: (horizontal && fibonacci(size) * baseSpace) || 1,
        width: (!horizontal && fibonacci(size) * baseSpace) || 0,
      }}
    />
  );
};
