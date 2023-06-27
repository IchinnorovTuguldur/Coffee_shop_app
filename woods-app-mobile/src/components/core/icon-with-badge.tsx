import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay, Padding, Text } from '../layout';
import { Circle } from './circle';

type IconWithBadgeType = {
  children?: ReactNode;
  count?: number | string;
  onPress?: () => void;
};

export const IconWithBadge = (props: IconWithBadgeType) => {
  const { children, count, onPress } = props;
  const disabled = count === 0;
  const handleIconPress = () => {
    if (disabled) {
      return;
    }
    onPress && onPress();
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={handleIconPress}>
      <Padding>{children}</Padding>
      <Overlay size={[-1, 0, undefined, -1]}>
        <Circle size={5} color="orange.main">
          <Text color="white.main" type="footnote.light" alignment="center">
            {count || 0}
          </Text>
        </Circle>
      </Overlay>
    </TouchableOpacity>
  );
};
