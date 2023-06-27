import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const LoyaltyIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 22} height={size || height || 22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M10.999 16.738l-6.465 3.62 1.444-7.268-5.44-5.03 7.357-.873L11 .458l3.104 6.729 7.358.872-5.44 5.03 1.443 7.268L11 16.738z"
        fill={color ? mapColorToBackground(color) : rawColor || '#969495'}
      />
    </Svg>
  );
};
