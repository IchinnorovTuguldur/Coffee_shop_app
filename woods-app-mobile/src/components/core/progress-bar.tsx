import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ColorTypes } from '../../theme';
import { mapColorToBackground } from '../layout';

type ProgressBarType = {
  current?: number;
  end?: number;
  duration?: number;
  width?: number | string;
  color?: ColorTypes;
  height?: number;
};

export const ProgressBar = (props: ProgressBarType) => {
  const { current = 0, end = 100, duration = 1000, color, height } = props;
  const currentProgress = useRef(new Animated.Value(current ? current : 0)).current;

  useEffect(() => {
    Animated.timing(currentProgress, {
      duration: duration,
      toValue: end,
      useNativeDriver: false,
    }).start();
  }, [current, end]);

  return (
    <View style={{ height: height || 4, width: '100%', backgroundColor: mapColorToBackground('gray.darker'), position: 'relative' }}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: mapColorToBackground(color || 'green.accent'),
          width: currentProgress.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'], extrapolate: 'clamp' }),
        }}
      />
    </View>
  );
};
