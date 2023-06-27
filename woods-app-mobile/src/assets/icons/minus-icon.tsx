import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const MinusIcon = (props: IconType) => {
  const { width, height, color, rawColor } = props;
  return (
    <Svg width={width || 14} height={height || 2} viewBox="0 0 14 2" fill="none">
      <Path d="M0 2h14V0H0v2z" fill={color ? mapColorToBackground(color) : rawColor || '#fff'} />
    </Svg>
  );
};
