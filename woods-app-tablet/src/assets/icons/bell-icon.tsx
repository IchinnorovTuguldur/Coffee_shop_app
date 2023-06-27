import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const BellIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 20} height={size || height || 20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.167 14.166v.5h1.667v.667H2.167v-.667h1.667V8.333a6.167 6.167 0 1112.333 0v5.833zm-1.167.5h.5V8.333a5.5 5.5 0 10-11 0v6.333H15zm-3 3.333v.667H8v-.667h4z"
        fill="#2D2A2B"
        stroke={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
      />
    </Svg>
  );
};
