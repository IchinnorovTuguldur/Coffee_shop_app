import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const CrediCardIcon = (props: IconType) => {
  const { height, width, size, color, rawColor } = props;
  return (
    <Svg width={size || width || 63.665} height={size || height || 63.664} viewBox="0 0 63.665 63.664">
      <Path
        fill={color ? mapColorToBackground(color) : rawColor || '#000'}
        d="M4.167 52.145h55.331c2.298 0 4.167-1.895 4.167-4.222V15.741c0-2.328-1.869-4.222-4.167-4.222H4.167C1.869 11.52 0 13.413 0 15.741v32.182c0 2.327 1.869 4.222 4.167 4.222zm57.415-4.222c0 1.179-.936 2.139-2.084 2.139H4.167c-1.149 0-2.083-.96-2.083-2.139v-2.462h59.499v2.462zM2.083 15.741c0-1.179.935-2.138 2.083-2.138h55.331c1.148 0 2.084.959 2.084 2.138v19.302H2.083V15.741z"
      />
    </Svg>
  );
};
