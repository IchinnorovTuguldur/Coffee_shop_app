import React from 'react';
import { Border, Padding, Stack, Text } from '../../components';
import { DropDown } from '../../components/dropdown/drop-down';

const MilkTypes = ['Whole Milk', '2% Milk', 'Almond Milk', 'None'];

export const ItemMilkSelection = () => {
  return (
    <Stack size={4}>
      <Stack size={2}>
        <Padding size={[0, 4]}>
          <Text type="caption1.bold">Milk</Text>
        </Padding>
        <Border size={[1]} color="orange.light" radius="large" />
      </Stack>
      <DropDown label="Milk" preview="Add Milk" types={MilkTypes} defaultValue="Whole Milk" />
    </Stack>
  );
};
