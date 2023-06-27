import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CartIcon } from '../../assets';
import { BackIcon } from '../../assets/icons/back-icon';
import {
  Border,
  Button,
  IconWithBadge,
  mapColorToBackground,
  Overlay,
  Padding,
  RemoteImage,
  Stack,
  Text,
  useBottomSheet,
  PriceText,
} from '../../components';
import { AnimatedHeader } from '../../components/animated-header/animated-header';
import { Route } from '../../navigation/routes';
import { useShoppingCart } from '../../shopping-cart/shopping-cart-provider';
import { ItemCustomization, ItemShotSelection, SuccessfullyAddedItemSheet } from '../../subsets/item-selection';
import { ItemMilkSelection } from '../../subsets/item-selection/item-milk-selection';
import { ItemSizeSelection } from '../../subsets/item-selection/item-size-selection';

export const ItemSelectScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute<any>();
  const { image, name, price } = params || {};
  const { present } = useBottomSheet();

  const { totalItems, updateItem, totalPrice } = useShoppingCart();
  const [imageHeight, setImageHeight] = useState<number>();

  const goBack = () => {
    navigation.goBack();
  };
  const goToCartScreen = () => {
    navigation.navigate(Route.CheckoutHome);
  };
  const addItemToCart = () => {
    updateItem(params, 1);
    present({ content: <SuccessfullyAddedItemSheet params={params} goPrev={goBack} goNext={goToCartScreen} /> });
  };

  const LeftIcon = (
    <TouchableOpacity onPress={goBack}>
      <BackIcon />
    </TouchableOpacity>
  );

  const RightIcon = (
    <IconWithBadge count={totalItems} onPress={goToCartScreen}>
      <CartIcon />
    </IconWithBadge>
  );

  return (
    <View
      style={{
        backgroundColor: mapColorToBackground('white.main'),
        flexGrow: 1,
      }}
    >
      <AnimatedHeader moduleHeight={imageHeight} leftIcon={LeftIcon} rightIcon={RightIcon}>
        <View onLayout={(event) => setImageHeight(event.nativeEvent.layout.height)}>
          <RemoteImage url={image} />
        </View>

        <Padding>
          <Border size={[0, 0, 1, 0]} role="tertiary">
            <Padding size={[5]}>
              <Text type="paragraph.bold" numberOfLines={2}>
                {name || 'Loading...'}
              </Text>
            </Padding>
          </Border>
        </Padding>

        <ItemSizeSelection />
        <Padding size={[5]}>
          <Stack size={6}>
            <ItemShotSelection />
            <ItemMilkSelection />
            <ItemCustomization />
          </Stack>
        </Padding>

        <Padding size={[7, 0]} />
      </AnimatedHeader>

      <Overlay size={[undefined, 0, 0, 0]} color="white.main">
        <Padding size={[5, 5, 6, 5]}>
          <Button onClick={addItemToCart}>
            <Text type="caption2.main" color="white.main">
              Continue{' '}
              <PriceText type="caption2.main" color="white.main">
                {price}
              </PriceText>
            </Text>
          </Button>
        </Padding>
      </Overlay>
    </View>
  );
};
