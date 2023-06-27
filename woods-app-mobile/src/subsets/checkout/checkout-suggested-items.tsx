import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import _ from 'lodash';
import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Drinks } from '../../assets/drinks';
import { Border, Box, Brick, Padding, Queue, Stack, Text, useScreenSize } from '../../components';
import { Route } from '../../navigation';

type CheckoutSuggestedItemPreviewType = {
  image?: string;
  name?: string;
  price?: string;
};

export const CheckoutSuggestedItemPreview = (props: CheckoutSuggestedItemPreviewType) => {
  const { image, name, price } = props;
  const cardWidth = useScreenSize(0.35);
  return (
    <Stack size={4}>
      <Queue>
        <Border radius="large">
          <Box width={cardWidth} ratio={1} url={image} />
        </Border>
      </Queue>
      <Stack width={cardWidth}>
        <Text numberOfLines={2}>{name || 'Loading...'}</Text>
        <Text>{price || '$0.00'}</Text>
      </Stack>
    </Stack>
  );
};

export const CheckoutSuggestedItems = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const navigateToItemSelectScreen = (item) => navigation.push(Route.ItemSelect, item);
  return (
    <Brick backgroundColor="gray.darker">
      <Padding size={[5, 0]}>
        <Stack size={5}>
          <Padding size={[0, 0, 0, 4]}>
            <Text type="footer1.bold">You may also like</Text>
          </Padding>
          <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <Padding size={[0, 0, 0, 4]} />
            {_.map(Drinks, (drink, index) => {
              return (
                <Pressable onPress={() => navigateToItemSelectScreen(drink)} key={index}>
                  <Padding size={[0, 4, 0, 0]}>
                    <CheckoutSuggestedItemPreview {...drink} />
                  </Padding>
                </Pressable>
              );
            })}
          </ScrollView>
        </Stack>
      </Padding>
    </Brick>
  );
};
