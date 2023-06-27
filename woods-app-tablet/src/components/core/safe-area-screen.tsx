import React, { ReactNode } from 'react';
import { Keyboard, SafeAreaView, StyleProp, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { ColorTypes } from '../../theme';
import { mapColorToBackground, Margin } from '../layout';

type SafeAreaScreenType = {
  children: ReactNode;
  size?: number[];
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ColorTypes;
};

export const SafeAreaScreen = ({ children, size = [2, 3, 0, 8], style, backgroundColor }: SafeAreaScreenType) => {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: mapColorToBackground(backgroundColor || 'white.main'),
        },
        style,
      ]}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Margin size={size} style={{ flex: 1 }}>
          {children}
        </Margin>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
