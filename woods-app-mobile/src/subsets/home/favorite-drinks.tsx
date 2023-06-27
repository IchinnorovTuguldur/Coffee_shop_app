import { useNavigation } from '@react-navigation/core';
import _ from 'lodash';
import React from 'react';
import { ScrollView } from 'react-native';
import { Drinks } from '../../assets/drinks';
import { ItemPreview, Padding, Queue, Stack, Text } from '../../components';
import { Route } from '../../navigation/routes';

export const FavoriteDrinks = () => {
  const navigation = useNavigation();

  const onItemSelect = (item) => {
    navigation.navigate(Route.ItemSelect, item);
  };
  return (
    <Stack size={4}>
      <Padding size={[0, 4]}>
        <Text type="paragraph.bold">Your favorite</Text>
      </Padding>
      <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Padding size={[0, 4]}>
          <Queue size={3}>
            {_.map(Drinks, (drink, index) => {
              return <ItemPreview {...drink} onSelect={() => onItemSelect(drink)} key={index} />;
            }).slice(0, 4)}
          </Queue>
        </Padding>
      </ScrollView>
    </Stack>
  );
};
