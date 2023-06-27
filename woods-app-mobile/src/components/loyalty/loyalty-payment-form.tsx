import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { usePaymentContext } from '../../payment';
import { Border, Padding, Queue, Stack, Text } from '../layout';
import { PriceText } from '../core';

interface SelectableAmountProps {
  amount?: number | string;
  selected: boolean;
  other?: boolean;
  onClick?: () => void;
}
const SelectableAmount: FC<SelectableAmountProps> = ({ amount, other, selected, onClick }: SelectableAmountProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Border size={[1, 1, 1, 1]} color={selected ? 'gold.main' : 'gray.dark'} radius="medium">
        <Padding size={[3, 4, 3, 4]}>
          <PriceText type={'caption1.light'} color={selected ? 'gold.main' : 'black.main'} alignment="center">
            {amount}
          </PriceText>
        </Padding>
      </Border>
    </TouchableOpacity>
  );
};
export const LoyaltyPaymentForm: FC = () => {
  const { payWithApple, balance } = usePaymentContext();
  const [other, setOther] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const onSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
    setOther(false);
  };
  return (
    <Padding size={[4, 4, 7, 4]}>
      <Stack size={5}>
        <Text type="caption2.light" alignment="center">
          Add money to Woods Card
        </Text>
        <Text type="footer2.light" alignment="center">
          Current Balance
        </Text>
        <PriceText type="subheading2.light" alignment="center" color="gold.main">
          {balance}
        </PriceText>
        <Text type="footer1.light" alignment="center">
          Charge Amount
        </Text>
        <Queue size={4} justifyContent="space-between">
          {[2500, 5000, 10000, 30000].map((amount) => {
            return (
              <SelectableAmount key={amount} amount={amount} onClick={() => onSelectAmount(amount)} selected={!other && selectedAmount === amount} />
            );
          })}
        </Queue>
        <PriceText type="subheading2.light" alignment="center" color="gold.main">
          {selectedAmount}
        </PriceText>
      </Stack>
    </Padding>
  );
};
