import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CenterType = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  flex?: number;
};

export const CenterStyle = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
});

export const Center = (props: CenterType) => {
  const { children, style, flex } = props;
  return <View style={[CenterStyle.container, style, { flex }]}>{children}</View>;
};
