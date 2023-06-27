import { useNavigation } from '@react-navigation/core';
import _ from 'lodash';
import React from 'react';
import { Pressable } from 'react-native';
import { VisaIcon } from '../../assets';
import { Border, Grid, Padding, Queue, Stack, Text } from '../../components';
import { Route } from '../../navigation/routes';

export const CheckoutPaymentMethod = (props: any) => {
  const { navigate } = useNavigation();
  const { cardNumber } = props;
  const goToPaymentScreen = () => navigate(Route.PaymentOptions);
  return (
    <Stack size={5}>
      <Queue justifyContent="space-between">
        <Text>Payment Method</Text>
        <Pressable onPress={goToPaymentScreen}>
          <Text type="caption1.main" color="orange.main" underlined>
            Change method
          </Text>
        </Pressable>
      </Queue>
      <Border size={[1]} radius="medium" color="gray.darker">
        <Padding size={[4]}>
          <Grid columns={[2, 8]}>
            <VisaIcon />
            <Stack size={2}>
              <Text type="footer1.bold">Credit Card</Text>
              <Text type="footer1.light">Visa **** {_.slice(cardNumber, _.size(cardNumber) - 4, _.size(cardNumber))}</Text>
            </Stack>
          </Grid>
        </Padding>
      </Border>
    </Stack>
  );
};
