import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const WalkingIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 42} height={size || height || 42} viewBox="0 0 42 42" fill="none">
      <Path
        d="M18.111 29.213l-6.16 8.027M21.192 13.533l-2.146 11.014 5.786 5.413 3.454 7.187m-7.094-23.614l4.947 5.6 5.88 1.96m-10.827-7.56l-7.186 2.334-3.547 5.226"
        stroke={color ? mapColorToBackground(color) : rawColor || '#C87A00'}
        strokeWidth={3.938}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={22.589} cy={6.907} r={3.173} fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'} />
    </Svg>
  );
};
