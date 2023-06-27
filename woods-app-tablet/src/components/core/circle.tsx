import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ColorTypes } from '../../theme';
import { mapColorToBackground, mapColorToBorder } from '../layout';
import { fibonacci } from '../utilities';

export type CircleType = {
  children?: ReactNode;
  borderSize?: number;
  height?: number;
  width?: number;
  size?: number;
  flex?: number;
  color?: ColorTypes;
  borderColor?: ColorTypes;
};

export const Circle = (props: CircleType) => {
  const { children, height, size, width, flex, color, borderSize, borderColor } = props;
  const { baseSpace } = useTheme();
  const style = StyleSheet.create({
    container: {
      flex,
      position: 'relative',
      overflow: 'hidden',
      height: fibonacci(size || height) * baseSpace || 6,
      width: fibonacci(size || width) * baseSpace || 6,
      borderRadius: (fibonacci(size || width) * baseSpace) / 2,
      borderWidth: borderSize || 1,
      borderColor: mapColorToBorder(borderColor || 'transparent.main'),
      backgroundColor: mapColorToBackground(color || 'transparent.main'),
    },
    innerContainer: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>{children}</View>
    </View>
  );
};
