import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const ShotIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={width || size || 40} height={height || size || 40} viewBox="0 0 40 40" fill="none">
      <Rect
        width={width || size || 40}
        height={height || size || 40}
        rx={2}
        fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
        fillOpacity={0.1}
      />
      <Path
        d="M13.161 10.5H25.84a.5.5 0 01.494.574l-2.7 18a.5.5 0 01-.494.426H15.86a.5.5 0 01-.494-.426l-2.7-18a.5.5 0 01.494-.574z"
        stroke={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
      />
      <Path
        d="M26 14H13l1.384 9.174S15.5 26 19.5 26c4 0 5.114-2.826 5.114-2.826L26 14z"
        fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
      />
    </Svg>
  );
};
