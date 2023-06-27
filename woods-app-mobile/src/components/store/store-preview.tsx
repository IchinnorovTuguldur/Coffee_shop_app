import React, { FC } from 'react';
import { WalkIcon } from '../../assets';
import { Button } from '../button';
import { Box } from '../core';
import { Brick, Padding, Queue, Stack, Text } from '../layout';

interface StorePreviewProps {
  onSelect?: () => void;
  images: string[];
  name: string;
  location: {
    address: string;
  };
}

export const StorePreview: FC<StorePreviewProps> = (props: StorePreviewProps) => {
  const { onSelect, images, name, location } = props;

  const { address } = location || {};
  return (
    <Brick backgroundColor="white.main">
      <Stack size={4}>
        <Box ratio={2} url={images && images[0]} />
        <Padding size={[4]}>
          <Stack size={4}>
            <Stack size={2}>
              <Text>{name}</Text>
              <Text type="caption2.light" numberOfLines={2}>
                {address}
              </Text>
              <Queue>
                <Text type="caption2.light">Open until 9:00PM - </Text>
                <Text type="caption2.bold" color="gold.main">
                  0.2 mi
                </Text>
              </Queue>
            </Stack>
            <Queue>
              <Button onClick={onSelect}>ORDER HERE</Button>
            </Queue>
          </Stack>
        </Padding>
      </Stack>
    </Brick>
  );
};
