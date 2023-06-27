import _ from 'lodash';
import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RightChevronIcon } from '../../assets';
import { Border, Center, Overlay, Padding, Stack, Text } from '../../components';

export const ItemNutritionInfo = () => {
  const [isClosed, setIsClosed] = useState<boolean>();

  return (
    <Stack size={4}>
      <TouchableOpacity onPress={() => setIsClosed(!isClosed)}>
        <Border size={[1]} color="gray.darker" radius="medium">
          <Border size={!isClosed ? [0] : [0, 0, 1, 0]} color="gray.darker">
            <Padding size={[4]}>
              <Text type="caption2.main">Nutrition Info</Text>
              <Overlay size={[0, 4, 0]}>
                <Center flex={1}>
                  <View style={{ transform: [{ rotate: isClosed ? '90deg' : '-90deg' }] }}>
                    <RightChevronIcon />
                  </View>
                </Center>
              </Overlay>
            </Padding>
          </Border>
          {isClosed && (
            <Padding size={[4]}>
              <Text type={'caption2.light'}>CALL TO IRS!</Text>
            </Padding>
          )}
        </Border>
      </TouchableOpacity>
    </Stack>
  );
};
