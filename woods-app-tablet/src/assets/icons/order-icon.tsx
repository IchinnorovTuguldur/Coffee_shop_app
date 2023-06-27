import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const OrderIcon = (props: IconType) => {
  const { height, width, size, rawColor, color } = props;
  return (
    <Svg height={height || size || 20} viewBox="0 0 18 20" width={width || size || 18}>
      <Path
        d="M0 16.5V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3.5C2.57174 20 1.6815 19.6313 1.02513 18.9749C0.368749 18.3185 0 17.4283 0 16.5ZM16 18V15H3.5C3.10218 15 2.72064 15.158 2.43934 15.4393C2.15804 15.7206 2 16.1022 2 16.5C2 16.8978 2.15804 17.2794 2.43934 17.5607C2.72064 17.842 3.10218 18 3.5 18H16ZM2 13.337C2.46869 13.1144 2.98115 12.9993 3.5 13H16V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13.337Z"
        fill={color ? mapColorToBackground(color) : rawColor || '#333'}
      />
    </Svg>
  );
};
