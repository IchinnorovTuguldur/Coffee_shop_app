import functions from '@react-native-firebase/functions';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackIcon } from '../../assets';
import { useAuthentication } from '../../authentication';
import { Border, Button, Overlay, Padding, SafeAreaScreen, Stack, Text } from '../../components';
import { useFirestoreCollection } from '../../firebase/firebase';
import { useShoppingCart } from '../../shopping-cart';
import { Cards } from '../../subsets/payment-methods';

export const PaymentOptionsScreen = () => {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const { user } = useAuthentication();
  const { items } = useShoppingCart();
  const { data: cards } = useFirestoreCollection(['users', user?.uid, 'paymentMethods']);
  const { createRecord } = useFirestoreCollection(['users', user?.uid, 'orders']);
  const { createRecord: createPaymentIntent } = useFirestoreCollection(['users', user?.uid, 'payments']);
  const onChargeCard = async () => {
    await createRecord({
      card: cards[0],
      items,
    });
  };
  const createIntent = async () => {
    await createPaymentIntent({
      amount: 1000,
      currency: 'USD',
      payment_method: {
        card: cards[0]?.card?.cardId,
        billing_details: {
          name: 'Shagai Nyamdorj',
        },
      },
    });
  };
  return (
    <SafeAreaScreen>
      <Stack size={5}>
        <Border size={[0, 0, 1, 0]} color="gray.darker">
          <Padding size={[3, 0, 5, 0]}>
            <Text alignment="center" type="paragraph.bold">
              Payments
            </Text>
            <Overlay size={[0, undefined, undefined, 4]}>
              <TouchableOpacity onPress={goBack}>
                <BackIcon />
              </TouchableOpacity>
            </Overlay>
          </Padding>
        </Border>
        <Padding size={[0, 4]}>
          <Stack size={4}>
            <Text type="paragraph.bold">Credit card</Text>
            <Cards />
            <Button type="secondary" onClick={createIntent}>
              Create Intent
            </Button>
          </Stack>
        </Padding>
      </Stack>
      <Overlay size={[undefined, 0, 0, 0]}>
        <Border size={[1, 0, 0, 0]} color="gray.darker">
          <Padding size={[5, 4, 4, 4]}>
            <Button type="secondary" onClick={onChargeCard}>
              Check Out
            </Button>
          </Padding>
        </Border>
      </Overlay>
    </SafeAreaScreen>
  );
};
