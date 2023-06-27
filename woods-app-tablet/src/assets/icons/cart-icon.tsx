import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const CartIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 40} height={size || height || 40} viewBox="0 0 40 40" fill="none">
      <Rect width={40} height={40} rx={20} fill="#EAEAEA" />
      <Path
        d="M15.316 16.28h9.66v8.824c0 .817-.662 1.478-1.479 1.478h-6.702a1.478 1.478 0 01-1.479-1.478V16.28zM17.248 15.314c0-1.6 1.297-2.898 2.898-2.898v0c1.6 0 2.898 1.297 2.898 2.898v.966h-5.796v-.966z"
        stroke={color ? mapColorToBackground(color) : rawColor || '#2D2A2B'}
        strokeWidth={1.478}
      />
    </Svg>
  );
};
