import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {mapColorToBackground} from '../../components';
import {IconType} from './types';

export const RecentOrdersIcon = (props: IconType) => {
  const {height, width, size, color, rawColor} = props;
  return (
    <Svg
      width={width || size || 24}
      height={height || size || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M6.5 2h11a1 1 0 01.8.4L21 6v15a1 1 0 01-1 1H4a1 1 0 01-1-1V6l2.7-3.6a1 1 0 01.8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 006 0v-2h2v2a5 5 0 11-10 0v-2h2z"
        fill={color ? mapColorToBackground(color) : rawColor || '#D3A762'}
      />
    </Svg>
  );
};
