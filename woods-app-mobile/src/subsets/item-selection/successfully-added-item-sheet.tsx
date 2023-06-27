import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CrossIcon } from '../../assets';
import { Border, Button, Overlay, Padding, Queue, Stack, Text, useBottomSheet, PriceText } from '../../components';

export const SuccessfullyAddedItemSheet = ({ params, goPrev, goNext }: { params?: any; goPrev: () => void; goNext: () => void }) => {
  const { name, price } = params || {};
  const { close } = useBottomSheet();
  const handleCheckout = () => {
    goNext();
    close();
  };
  const handleExplore = () => {
    goPrev();
    close();
  };
  return (
    <Padding size={[0, 5]} height="100%">
      <Stack size={5}>
        <Queue justifyContent="space-between">
          <Text type="caption1.main">Item added</Text>
          <TouchableOpacity onPress={close}>
            <CrossIcon />
          </TouchableOpacity>
        </Queue>
        <Border color="orange.main" size={[0, 0, 1, 0]} />
        <Text>{name} has been added your bag.</Text>
      </Stack>

      <Overlay size={[undefined, 0, 7, 0]}>
        <Padding size={[0, 5]}>
          <Stack size={4}>
            <Button type="secondary" textType="caption1.main" onClick={handleExplore}>
              Add More Items
            </Button>
            <Button textType="caption1.main" onClick={handleCheckout}>
              Checkout <PriceText type="caption1.main" color="white.main">{price}</PriceText>
            </Button>
          </Stack>
        </Padding>
      </Overlay>
    </Padding>
  );
};
