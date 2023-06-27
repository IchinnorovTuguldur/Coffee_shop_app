import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BellIcon } from '../../assets';
import { Box } from '../core';
import { Border, Center, Overlay, Padding } from '../layout';
import { useScreenSize } from '../utilities';

export const Header = () => {
  const width = useScreenSize(0.4);
  return (
    <View style={{ zIndex: 99 }}>
      <Border backgroundColor="white.main">
        <Padding size={[0, 0, 0, 0]}>
          <Padding size={[5, 4]}>
            <Center>
              <Box ratio={7} width={width} source={require('../../assets/images/woods-logo.png')} />
            </Center>
            <Overlay size={[0, 4, 0]}>
              <Center flex={1}>
                <TouchableOpacity>
                  <Border backgroundColor="gray.darker" radius="small">
                    <Padding size={[3.2]}>
                      <BellIcon size={16} />
                    </Padding>
                  </Border>
                </TouchableOpacity>
              </Center>
            </Overlay>
          </Padding>
        </Padding>
      </Border>
    </View>
  );
};
