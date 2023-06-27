import { useNavigation } from '@react-navigation/core';
import _ from 'lodash';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuthentication } from '../../authentication/auth-provider';
import { Button, Stack } from '../../components';
import { useFirestoreCollection } from '../../firebase/firebase';
import { Route } from '../../navigation/routes';
import { CardPreview } from './card-preview';

export const Cards = () => {
  const { user } = useAuthentication();
  const navigation = useNavigation();
  const { data: savedCards } = useFirestoreCollection(['users', user?.uid, 'paymentMethods']);

  const goToAddNewCardScreen = () => navigation.navigate(Route.AddNewCard);
  const goToCheckoutScreen = (card) => () => navigation.navigate(Route.Checkout, { card });
  return (
    <Stack size={5}>
      {_.map(savedCards, (card, index) => {
        return (
          <TouchableOpacity onPress={goToCheckoutScreen(card)} key={index}>
            <CardPreview {...card} key={index} />
          </TouchableOpacity>
        );
      })}
      <Button onClick={goToAddNewCardScreen}>+ Add new card</Button>
    </Stack>
  );
};
