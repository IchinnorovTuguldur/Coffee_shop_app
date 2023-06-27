import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const MilkIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 40} height={size || height || 40} viewBox="0 0 40 40" fill="none">
      <Rect
        width={size || width || 40}
        height={size || height || 40}
        rx={2}
        fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
        fillOpacity={0.1}
      />
      <Rect x={15.5} y={10} width={9} height={2} rx={1} fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'} />
      <Path
        d="M22.5 12c0 .743.336 2.82 1.624 5.56v0a3.81 3.81 0 01.376 1.617V29a1 1 0 01-1 1h-7a1 1 0 01-1-1v-9.626c0-.687.193-1.357.5-1.972v0c1.186-2.378 1.5-4.54 1.5-5.402"
        stroke={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
      />
      <Path
        d="M24.5 18.827V29a1 1 0 01-1 1h-7a1 1 0 01-1-1v-9.972c0-.704.193-1.392.5-2.027.833-.017 2.7.149 3.5.952 1.5 1.506 4.247-.073 4.624-.79a4.02 4.02 0 01.376 1.664z"
        fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
      />
    </Svg>
  );
};
