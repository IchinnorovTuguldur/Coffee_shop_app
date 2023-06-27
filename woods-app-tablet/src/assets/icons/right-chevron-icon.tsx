import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const RightChevronIcon = (props: IconType) => {
  const { width, height, size, color, rawColor } = props;

  return (
    <Svg width={width || size || 8} height={height || size || 14} viewBox="0 0 8 14" fill="none">
      <Path d="M5.172 7l-4.95 4.95 1.414 1.415L8 7 1.636.637.222 2.05 5.172 7z" fill={color ? mapColorToBackground(color) : rawColor || '#C87A00'} />
    </Svg>
  );
};
