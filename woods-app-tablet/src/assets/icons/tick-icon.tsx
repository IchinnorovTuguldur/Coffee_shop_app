import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {mapColorToBackground} from '../../components';
import {IconType} from './types';

export const TickIcon = (props: IconType) => {
  const {height, width, size, color, rawColor} = props;
  return (
    <Svg
      width={width || size || 32}
      height={height || size || 32}
      viewBox="0 0 32 32"
      fill="none">
      <Path
        d="M13.333 20.23L25.589 7.973l1.887 1.885-14.143 14.143-8.485-8.486 1.885-1.885 6.6 6.6z"
        fill={color ? mapColorToBackground(color) : rawColor || '#27AE60'}
      />
    </Svg>
  );
};
