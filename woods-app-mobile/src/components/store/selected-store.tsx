import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RightChevronIcon } from '../../assets';
import { Route } from '../../navigation/routes';
import { Border, Center, Padding, Queue, Stack, Text } from '../layout';
import { useStoreContext } from './store-provider';

type SelectedStoreProps = {
  scrollAnimatedValue: Animated.Value;
};

export const SelectedStore: FC<SelectedStoreProps> = ({ scrollAnimatedValue }: SelectedStoreProps) => {
  const navigation = useNavigation();
  const { selectedStore } = useStoreContext();
  const { name, location } = selectedStore || {};
  const { address } = location || {};
  const onChangeStore = () => {
    navigation.navigate(Route.SelectStore);
  };
  return (
    <Border backgroundColor="black.warmer">
      <TouchableOpacity onPress={onChangeStore}>
        <Padding size={[0, 0]}>
          <View>
            <Padding size={[4, 5]}>
              <Queue justifyContent="space-between">
                <Stack size={2}>
                  <Text color="gray.main" type="footer2.light">
                    Pick-up Store
                  </Text>
                  <Text color="white.main">{name}</Text>
                  <Text type="footer2.light" color="white.main">
                    {address}
                  </Text>
                </Stack>
                <Center>
                  <RightChevronIcon color="white.main" />
                </Center>
              </Queue>
            </Padding>
          </View>
        </Padding>
      </TouchableOpacity>
    </Border>
  );
};
