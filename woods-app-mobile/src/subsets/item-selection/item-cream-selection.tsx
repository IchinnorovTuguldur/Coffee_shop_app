import React from 'react';
import { Border, Padding, Stack, Text } from '../../components';
import { DropDown } from '../../components/dropdown/drop-down';

const CreamTypes = ['No Whipped Cream', 'Light Whipped Cream', 'Whipped Cream', 'Extra Whipped Cream'];

export const ItemCreamSelection = () => {
  return (
    <Stack size={4}>
      <Stack size={2}>
        <Padding size={[0, 4]}>
          <Text type="caption1.bold">Toppings</Text>
        </Padding>
        <Border size={[1]} color="orange.light" radius="large" />
      </Stack>
      <DropDown label="Toppings" preview="Add Cream" types={CreamTypes} defaultValue="Whipped Cream" />
    </Stack>
  );
};
