import _ from 'lodash';
import React from 'react';
import { Padding, Stack, Text } from '../../components';
import { useShoppingCart } from '../../shopping-cart';
import { CheckoutItemPreview } from './checkout-item-preview';

export const CheckoutOrderItems = () => {
  const { items } = useShoppingCart();

  return (
    <Stack>
      <Padding size={[0, 0, 5, 0]}>
        <Text type="caption1.bold">Order Items</Text>
      </Padding>
      <Stack size={5}>
        {_.map(items, (item, index) => {
          return _.times(item?.quantity, (quantityIndex) => <CheckoutItemPreview {...item} key={`${index} + ${quantityIndex}`} />);
        })}
      </Stack>
    </Stack>
  );
};
