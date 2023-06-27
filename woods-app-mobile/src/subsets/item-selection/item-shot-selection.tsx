import React from 'react';
import { Border, ItemIngredientCounter, Padding, Stack, Text } from '../../components';

export const ItemShotSelection = () => {
  return (
    <Stack size={5}>
      <Stack size={2}>
        <Padding size={[0, 4]}>
          <Text type="caption1.bold">Espresso & Shot Options</Text>
        </Padding>
        <Border size={[1]} color="orange.light" radius="large"></Border>
      </Stack>
      <ItemIngredientCounter defaultValue={2} maxValue={15} label="Shots" preview="Add Shot" />
      <ItemIngredientCounter defaultValue={0} label="Shots" preview="Add Shot" />
    </Stack>
  );
};
