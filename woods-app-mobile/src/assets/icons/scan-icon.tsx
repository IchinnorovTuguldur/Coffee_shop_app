import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const ScanIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 3h6v5h-2V5h-4V3zM9 3v2H5v3H3V3h6zm6 18v-2h4v-3h2v5h-6zm-6 0H3v-5h2v3h4v2zM3 11h18v2H3v-2z"
        fill={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
      />
    </Svg>
  );
};
