import React, { ReactNode, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Center, Overlay, Padding } from '../layout';

type AnimatedHeaderType = {
  children: ReactNode | ReactNode[];
  moduleHeight: number;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
};

export const AnimatedHeader = ({ children, moduleHeight, rightIcon, leftIcon }: AnimatedHeaderType) => {
  const [headerOpacity, setHeaderOpacity] = useState<number>();
  const [headerHeight, setHeaderHeight] = useState<number>();
  const handleScroll = (e) => {
    const calculateOpacity = 1 - (moduleHeight - e.nativeEvent.contentOffset.y - headerHeight) / (headerHeight - 20);
    if (e.nativeEvent.contentOffset.y >= moduleHeight - headerHeight - 80) {
      setHeaderOpacity(calculateOpacity > 1 ? 1 : calculateOpacity);
    } else {
      setHeaderOpacity(0);
    }
  };
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={8}
        style={{ height: Dimensions.get('window').height }}
      >
        {children}
      </ScrollView>
      <Overlay size={[0, 0, undefined, 0]}>
        <View onLayout={(event) => setHeaderHeight(event.nativeEvent.layout.height)}>
          <Padding size={[7, 5]}>
            <Overlay size={[6, undefined, 0, 5]}>
              <Center flex={1}>{leftIcon}</Center>
            </Overlay>

            <Overlay size={[6, 5, 0]}>
              <Center flex={1}>{rightIcon}</Center>
            </Overlay>
          </Padding>
        </View>
        <Overlay size={[0, 0, 0, 0]} opacity={headerOpacity} color={headerOpacity >= 0 ? 'white.main' : 'transparent.main'} zIndex={-1} />
      </Overlay>
    </>
  );
};
