import React from 'react';
import { Border, Box, Grid, Queue, Stack, Text, useScreenSize, PriceText } from '../../components';

type CheckoutItemPreviewType = {
  image?: string;
  name?: string;
  price?: string;
  quantity?: number;
  key?: string;
};

export const CheckoutItemPreview = (props: CheckoutItemPreviewType) => {
  const cardWidth = useScreenSize(0.3);
  const { image, name, price } = props;

  return (
    <Grid columns={[1, 2]} gap={5}>
      <Queue>
        <Border radius="large">
          <Box width={cardWidth} ratio={1} url={image} />
        </Border>
      </Queue>
      <Stack flex={1} justifyContent="space-between">
        <Text type="footer1.light" numberOfLines={2}>
          {name || 'Loading..'}
        </Text>
        <PriceText type="caption1.bold" color="orange.main">
          {price}
        </PriceText>
      </Stack>
    </Grid>
  );
};
