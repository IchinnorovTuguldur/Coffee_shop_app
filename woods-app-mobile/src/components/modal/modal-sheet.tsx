import React, { forwardRef, useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { mapColorToBackground, mapRoleToBackgroundColor, Margin } from '../layout';

type ModalSheetType = {
  visible: boolean;
  dismissable?: boolean;
  onDismiss: () => void;
  children?: any;
  overlayAccessibilityLabel?: string;
};

export const ModalSheet = forwardRef((props: ModalSheetType, ref: any) => {
  const { children, visible, onDismiss, overlayAccessibilityLabel, dismissable } = props;
  let { baseSpace } = useTheme();

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      showModal();
    }
  }, [visible]);

  const showModal = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) {
        return;
      }

      if (visible && onDismiss) {
        onDismiss();
      }
    });
  };

  return (
    <Animated.View
      accessibilityViewIsModal
      accessibilityLiveRegion="polite"
      pointerEvents="auto"
      style={{
        ...StyleSheet.absoluteFillObject,
        zIndex: visible ? 1 : 0,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}
      onAccessibilityEscape={hideModal}
    >
      <TouchableWithoutFeedback
        accessibilityLabel={overlayAccessibilityLabel}
        accessibilityRole="button"
        disabled={!dismissable}
        onPress={dismissable ? hideModal : undefined}
      >
        <Animated.View
          style={[
            {
              opacity,
              height: '100%',
              width: '100%',
              backgroundColor: '#80808080',
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <View
        pointerEvents="box-none"
        style={{
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          marginTop: 150,
          marginBottom: 150,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity, backgroundColor: '#ffffff', borderRadius: 20, justifyContent: 'center' }}>
          {children}
        </Animated.View>
      </View>
    </Animated.View>
  );
});
