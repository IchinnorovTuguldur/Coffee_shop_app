import _ from 'lodash';
import React, { Children, FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components';
import { fibonacci } from '../utilities';
import { Brick } from './brick';
import { Spacer } from './spacer';

type QueueType = {
  size?: number;
  children?: any;
  height?: number | string;
  width?: number | string;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignVertical?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

export const Queue: FC<QueueType> = (props: QueueType) => {
  const { size, width, height, justifyContent, children, wrap, alignVertical } = props;
  const { baseSpace } = useTheme();
  const style = StyleSheet.create({
    container: {
      justifyContent,
      flexWrap: wrap,
      flexDirection: 'row',
      alignItems: alignVertical,
      width: _.isNumber(width) ? fibonacci(width) * baseSpace : width || undefined,
      height: _.isNumber(height) ? fibonacci(height) * baseSpace : height || undefined,
    },
  });

  return (
    <View style={style.container}>
      {Children.map(children, (child, index) => {
        if (index === 0) {
          return child;
        }
        return (
          <>
            <Spacer size={size} />
            {child}
          </>
        );
      })}
    </View>
  );
};
