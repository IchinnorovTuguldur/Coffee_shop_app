import React from 'react';
import { Pressable } from 'react-native';
import { CrossIcon } from '../../assets';
import { ApplePayLogo } from '../../assets/logos/apple-pay-logo';
import { Border, Padding, Queue, Stack, Text, useBottomSheet, PriceText } from '../../components';
import { useShoppingCart } from '../../shopping-cart';

export const CheckoutPaymentConfirmation = ({ handleCheckout }: { handleCheckout: () => void }) => {
  const { totalPrice } = useShoppingCart();
  const { close } = useBottomSheet();
  return (
    <Padding size={[0, 5, 6, 5]}>
      <Stack justifyContent="space-between" height="100%">
        <Stack size={5}>
          <Queue justifyContent="space-between">
            <Text type="caption1.bold">Confirm Payment</Text>
            <Pressable onPress={close}>
              <CrossIcon />
            </Pressable>
          </Queue>
          <Border size={[1, 0, 0, 0]} color="gray.darker" />
          <Queue justifyContent="space-between" alignVertical="center">
            <Text type="caption1.light">Payment</Text>
            <ApplePayLogo height={40} width={75} />
          </Queue>
          <Border size={[1, 0, 0, 0]} color="gray.darker" />
          <Queue justifyContent="space-between" alignVertical="center">
            <Text type="caption1.light">Summary</Text>
            <PriceText type="subheading1.bold">{totalPrice}</PriceText>
          </Queue>
        </Stack>
      </Stack>
    </Padding>
  );
};
