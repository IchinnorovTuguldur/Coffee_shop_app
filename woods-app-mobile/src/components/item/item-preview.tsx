import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { RemoteImage, PriceText } from '../core';
import { Border, Brick, Padding, Queue, Stack, Text } from '../layout';
import { useScreenSize } from '../utilities';

interface ItemPreviewProps {
  onSelect?: () => void;
  price?: string;
  name?: string;
  image?: string;
  weight?: string;
  widthRatio?: number;
}

export const ItemPreview: FC<ItemPreviewProps> = (props: ItemPreviewProps) => {
  const { onSelect, price, name, image, weight, widthRatio } = props;
  const width = useScreenSize(widthRatio || 0.38);
  return (
    <TouchableOpacity onPress={onSelect}>
      <Queue>
        <Border color="gray.darker" backgroundColor="white.main" radius="small">
          <Padding size={[2, 2, 2, 2]}>
            <Border radius="small">
              <RemoteImage width={width} ratio={0.8} url={image} />
            </Border>
            <Padding size={[4, 0, 4, 0]} width={width}>
              <Stack size={2}>
                <Text type="caption2.main" numberOfLines={1}>
                  {name || 'Loading...'}
                </Text>
                <Queue size={2}>
                  <PriceText type="footer1.light">{price}</PriceText>
                  <Text type="footer1.light">/{weight || '12oz'}</Text>
                </Queue>
              </Stack>
            </Padding>
          </Padding>
        </Border>
      </Queue>
    </TouchableOpacity>
  );
};
