import React from 'react';
import { Border, Padding, Queue, Stack, Text, PriceText } from '../../components';
import { useShoppingCart } from '../../shopping-cart';

export const CheckoutItemSummary = () => {
  const { taxPrice, totalPrice, totalPriceBeforeTax } = useShoppingCart();
  return (
    <Stack size={4}>
      <Border size={[1, 0]} color="gray.darker">
        <Padding size={[3, 0]}>
          <Stack size={2}>
            <Queue justifyContent="space-between">
              <Text type="caption2.light">Subtotal</Text>
              <PriceText type="caption2.bold">{totalPriceBeforeTax}</PriceText>
            </Queue>
            <Queue justifyContent="space-between">
              <Text type="caption2.light">Tax & Fees</Text>
              <PriceText type="caption2.bold">{taxPrice}</PriceText>
            </Queue>
          </Stack>
        </Padding>
      </Border>
      <Queue justifyContent="space-between">
        <Text type="caption1.bold">Total</Text>
        <PriceText type="caption1.bold">{totalPrice}</PriceText>
      </Queue>
    </Stack>
  );
};
