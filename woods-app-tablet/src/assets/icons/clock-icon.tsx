import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {mapColorToBackground} from '../../components';
import {IconType} from './types';

export const ClockIcon = (props: IconType) => {
  const {height, width, size, color, rawColor} = props;
  return (
    <Svg
      width={width || size || 32}
      height={height || size || 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M16 29.333c-7.364 0-13.333-5.97-13.333-13.334S8.637 2.666 16 2.666c7.364 0 13.334 5.97 13.334 13.333 0 7.364-5.97 13.334-13.334 13.334zm0-2.667a10.667 10.667 0 100-21.333 10.667 10.667 0 000 21.333zm1.334-10.667h5.333v2.667h-8V9.333h2.667v6.666z"
        fill={color ? mapColorToBackground(color) : rawColor || '#D3A762'}
      />
    </Svg>
  );
};
