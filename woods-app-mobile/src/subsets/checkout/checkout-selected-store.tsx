import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Border, Box, Overlay, Padding, Stack, Text, useStoreContext } from '../../components';
import { Route } from '../../navigation';

export const CheckoutSelectedStore = () => {
  const { selectedStore } = useStoreContext();
  const { name, location, images } = selectedStore || {};
  const { address } = location || {};
  const navigation = useNavigation();
  const onChangeStore = () => {
    navigation.navigate(Route.SelectStore);
  };
  return (
    <TouchableOpacity onPress={onChangeStore}>
      <Padding size={[0, 4]}>
        <Border radius="large">
          <Box ratio={2} url={images[0]} />
          <Overlay size={[0, 0, 0, 0]}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']}
              style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
            />
          </Overlay>
          <Overlay width="60%" size={[undefined, 4, 5, undefined]}>
            <Stack size={2} justifyContent="flex-end">
              <Text type="footer1.main" color="white.main" alignment="right">
                {name}
              </Text>
              <Text type="footer2.main" color="white.main" alignment="right">
                {address}
              </Text>
            </Stack>
          </Overlay>
        </Border>
      </Padding>
    </TouchableOpacity>
  );
};
