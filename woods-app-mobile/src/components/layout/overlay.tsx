import _ from 'lodash';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components';
import { ColorTypes } from '../../theme';
import { fibonacci } from '../utilities';
import { mapColorToBackground } from './background';

type OverlayType = {
  children?: any;
  color?: ColorTypes;
  relative?: boolean;
  size?: number[];
  zIndex?: number;
  height?: number | string;
  width?: number | string;
  flex?: number;
  opacity?: number;
};

export const Overlay: FC<OverlayType> = (props: OverlayType) => {
  const { children, zIndex, relative, height, width, color, size, flex, opacity } = props;
  const { baseSpace } = useTheme();
  const style = StyleSheet.create({
    container: {
      flex,
      zIndex,
      opacity,
      position: relative ? 'relative' : 'absolute',
      width: _.isNumber(width) ? fibonacci(width) * baseSpace : width,
      height: _.isNumber(height) ? fibonacci(height) * baseSpace : height,
      backgroundColor: mapColorToBackground(color || 'transparent.main'),
      top: _.isArray(size) ? size[0] && fibonacci(size[0]) * baseSpace : fibonacci(size) * baseSpace,
      right: _.isArray(size) ? size[1] && fibonacci(size[1]) * baseSpace : fibonacci(size) * baseSpace,
      bottom: _.isArray(size) ? size[2] && fibonacci(size[2]) * baseSpace : fibonacci(size) * baseSpace,
      left: _.isArray(size) ? size[3] && fibonacci(size[3]) * baseSpace : fibonacci(size) * baseSpace,
    },
  });

  return <View style={style.container}>{children}</View>;
};
