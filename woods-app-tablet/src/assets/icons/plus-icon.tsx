import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const PlusIcon = (props: IconType) => {
  const { color, height, width, size, rawColor } = props;
  return (
    <Svg width={size || width || 14} height={size || height || 14} viewBox="0 0 14 14" fill="none">
      <Path d="M6 6H0v2h6v6h2V8h6V6H8V0H6v6z" fill={color ? mapColorToBackground(color) : rawColor || '#fff'} />
    </Svg>
  );
};
