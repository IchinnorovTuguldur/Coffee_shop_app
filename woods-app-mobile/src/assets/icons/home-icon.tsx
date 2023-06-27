import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const HomeIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.49a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"
        fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
      />
    </Svg>
  );
};
