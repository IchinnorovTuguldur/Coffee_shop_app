import React, { FC } from 'react';
import { Text, TextStyleType } from '../layout';

type PriceTextProps = TextStyleType;

export const PriceText: FC<PriceTextProps> = (props) => {
  const { children } = props;
  const price = (Number(children || 0) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return <Text {...props}>{price}</Text>;
};
