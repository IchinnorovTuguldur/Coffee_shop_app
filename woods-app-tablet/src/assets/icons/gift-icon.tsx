import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { mapColorToBackground } from '../../components';
import { IconType } from './types';

export const GiftIcon = (props: IconType) => {
  const { height, width, size, rawColor, color } = props;
  return (
    <Svg height={height || size || 64} viewBox="0 0 64 64" width={width || size || 64}>
      <Path
        fill={color ? mapColorToBackground(color) : rawColor}
        d="M55.75 16.224H44.798a6.18 6.18 0 00.313-6.009 6.145 6.145 0 00-5.55-3.452c-.951 0-1.869.214-2.728.637-2.084 1.027-3.706 3.024-4.835 4.838-1.129-1.815-2.75-3.812-4.835-4.839a6.127 6.127 0 00-2.727-.636 6.147 6.147 0 00-5.55 3.451 6.18 6.18 0 00.314 6.01H8.25c-1.1 0-2 .9-2 2v10.374c0 1.1.9 2 2 2h.546V53.38a3.856 3.856 0 003.856 3.857h38.695a3.857 3.857 0 003.857-3.857V30.598h.546c1.1 0 2-.9 2-2V18.224c0-1.1-.9-2-2-2zm-17.149-5.236c1.067-.525 2.406-.057 2.923.994a2.186 2.186 0 01-.993 2.924c-.828.407-1.902.614-3.195.614-.566 0-1.109-.048-1.631-.109a3.83 3.83 0 00-.394-.905c.861-1.42 2.008-2.886 3.29-3.518zm-16.125.993a2.171 2.171 0 011.961-1.218c.334 0 .658.076.96.225 1.283.632 2.429 2.099 3.291 3.517-.17.281-.299.584-.394.906-.522.062-1.064.109-1.63.109-1.292 0-2.368-.207-3.194-.613a2.189 2.189 0 01-.994-2.926zm7.608 40.256H13.796v-9.075h16.288v9.075zM13.796 39.162v-8.565h16.288v8.565H13.796zm36.408 13.075H33.916v-9.075h16.288v9.075zm0-13.075H33.916v-8.565h16.288v8.565z"
      />
    </Svg>
  );
};