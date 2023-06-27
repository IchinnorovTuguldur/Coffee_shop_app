import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {mapColorToBackground} from '../../components';
import {IconType} from './types';

export const LogOutIcon = (props: IconType) => {
  const {height, width, size, color, rawColor} = props;
  return (
    <Svg
      width={width || size || 24}
      height={height || size || 24}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M4 18h2v2h12V4H6v2H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"
        fill={color ? mapColorToBackground(color) : rawColor || '#EB5757'}
      />
    </Svg>
  );
};
