import _ from 'lodash';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components';
import { ColorTypes } from '../../theme';
import { fibonacci } from '../utilities';
import { mapColorToBackground } from './background';

type MarginType = {
  children?: ReactNode;
  size?: number | number[];
  style?: StyleProp<ViewStyle>;
  color?: ColorTypes;
};

const buildMargin = (side, size) => {
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

export const Margin = (props: MarginType) => {
  const { children, size, style, color } = props;
  const { baseSpace } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: mapColorToBackground(color || 'transparent.main'),
      margin: !_.isArray(size) ? size : undefined,
      marginTop: fibonacci(buildMargin('top', size)) * baseSpace || 0,
      marginBottom: fibonacci(buildMargin('bottom', size)) * baseSpace || 0,
      marginLeft: fibonacci(buildMargin('left', size)) * baseSpace || 0,
      marginRight: fibonacci(buildMargin('right', size)) * baseSpace || 0,
    },
  });
  return <View style={[styles.container, style]}>{children}</View>;
};
