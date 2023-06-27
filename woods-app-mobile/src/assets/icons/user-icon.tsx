import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const UserIcon = (props: IconType) => {
  const { height, width, size, rawColor, color } = props;
  return (
    <Svg width={width || size || 22} height={height || size || 22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M18.334 20.166H16.5v-1.833a2.75 2.75 0 00-2.75-2.75h-5.5a2.75 2.75 0 00-2.75 2.75v1.833H3.667v-1.833a4.583 4.583 0 014.583-4.584h5.5a4.583 4.583 0 014.584 4.584v1.833zM11 11.916a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-1.833a3.667 3.667 0 100-7.333 3.667 3.667 0 000 7.333z"
        fill={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
      />
    </Svg>
  );
};
