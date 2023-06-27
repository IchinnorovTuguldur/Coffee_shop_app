import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable } from 'react-native';
import { VisaIcon } from '../../assets';
import { Border, Overlay, Padding, Queue, Text } from '../../components';
import { Route } from '../../navigation/routes';

type CardPreviewType = {
  card?: any;
  isDefault?: boolean;
  id?: string;
};

export const CardPreview = (props: CardPreviewType) => {
  const { navigate } = useNavigation();
  const { card, isDefault, id } = props;
  const { brand, last4 } = card || {};
  const goToUpdateCardInfoScreen = () => navigate(Route.UpdateCardInfo, { id });
  return (
    <Border size={[1]} color="gray.darker" radius="medium">
      <Padding size={isDefault ? [4, 4, 5, 4] : [4]}>
        <Queue justifyContent="space-between" alignVertical="center">
          <Queue size={5} alignVertical="center">
            <VisaIcon size={28} />
            <Padding>
              <Text type="caption2.bold">
                {brand} •••• {last4}
              </Text>
              {isDefault && (
                <Overlay size={[5, 0, undefined, 0]} width={10}>
                  <Text type="footer1.light">Default</Text>
                </Overlay>
              )}
            </Padding>
          </Queue>
          <Pressable onPress={goToUpdateCardInfoScreen}>
            <Text type="footer1.bold" color="orange.main">
              Manage
            </Text>
          </Pressable>
        </Queue>
      </Padding>
    </Border>
  );
};
