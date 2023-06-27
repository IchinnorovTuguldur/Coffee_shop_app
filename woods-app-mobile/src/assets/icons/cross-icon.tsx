import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const CrossIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={width || size || 24} height={height || size || 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18"
        stroke={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6l12 12"
        stroke={color ? mapColorToBackground(color) : rawColor || '#111'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
