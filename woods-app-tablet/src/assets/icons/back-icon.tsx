import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const BackIcon = (props: IconType) => {
  const { size, height, width, color, rawColor } = props;
  return (
    <Svg width={size || width || 40} height={size || height || 40} viewBox="0 0 40 40" fill="none">
      <Rect width={40} height={40} rx={20} fill="#EAEAEA" />
      <Path
        d="M22 25.2L16.4 20l5.6-5.2"
        stroke={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
        strokeWidth={2}
        strokeLinecap="square"
      />
    </Svg>
  );
};
