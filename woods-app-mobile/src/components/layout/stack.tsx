import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { Spacer } from './spacer';

type StackType = {
  flex?: number;
  size?: number;
  children?: any;
  width?: number | string;
  height?: number | string;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignVertical?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

export const Stack = (props: StackType) => {
  const { size = 0, flex, children, wrap, justifyContent, width, height, alignVertical } = props;

  const style = StyleSheet.create({
    container: {
      flex,
      width,
      height,
      justifyContent,
      flexWrap: wrap,
      flexDirection: 'column',
      alignItems: alignVertical,
    },
  });

  return (
    <View style={style.container}>
      {Children.map(children, (child, index) => {
        if (index == 0) {
          return <>{child}</>;
        }
        return (
          <>
            <Spacer size={size} horizontal />
            {child}
          </>
        );
      })}
    </View>
  );
};
