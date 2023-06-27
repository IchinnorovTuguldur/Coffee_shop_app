import _ from 'lodash';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components';
import { fibonacci } from '../utilities';

type PaddingType = {
  children?: ReactNode;
  size?: number | number[];
  style?: StyleProp<ViewStyle>;
  height?: number | string;
  width?: number | string;
};

const buildPadding = (side, size) => {
  if (!_.isArray(size)) {
    return 0;
  }

  switch (_.size(size)) {
    case 4:
      switch (side) {
        case 'top':
          return _.get(size, '0');
        case 'right':
          return _.get(size, '1');
        case 'bottom':
          return _.get(size, '2');
        case 'left':
          return _.get(size, '3');
        default:
          return 0;
      }
    case 3:
      switch (side) {
        case 'top':
          return _.get(size, '0');
        case 'right':
          return _.get(size, '1');
        case 'bottom':
          return _.get(size, '2');
        case 'left':
          return _.get(size, '1');
        default:
          return 0;
      }
    case 2:
      switch (side) {
        case 'top':
          return _.get(size, '0');
        case 'right':
          return _.get(size, '1');
        case 'bottom':
          return _.get(size, '0');
        case 'left':
          return _.get(size, '1');
        default:
          return 0;
      }
    case 1:
      switch (side) {
        case 'top':
          return _.get(size, '0');
        case 'right':
          return _.get(size, '0');
        case 'bottom':
          return _.get(size, '0');
        case 'left':
          return _.get(size, '0');
        default:
          return 0;
      }
    default:
      return 0;
  }
};

export const Padding = (props: PaddingType) => {
  const { children, size, style, height, width } = props;
  const { baseSpace } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width,
      height,
      position: 'relative',
      padding: !_.isArray(size) ? size : undefined,
      paddingTop: fibonacci(buildPadding('top', size)) * baseSpace || 0,
      paddingBottom: fibonacci(buildPadding('bottom', size)) * baseSpace || 0,
      paddingLeft: fibonacci(buildPadding('left', size)) * baseSpace || 0,
      paddingRight: fibonacci(buildPadding('right', size)) * baseSpace || 0,
    },
  });
  return <View style={[styles.container, style]}>{children}</View>;
};
