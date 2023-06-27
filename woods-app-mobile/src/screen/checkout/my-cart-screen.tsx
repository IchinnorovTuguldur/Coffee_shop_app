import { useNavigation } from '@react-navigation/core';
import _ from 'lodash';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { BackIcon, WoodsCoffeeMapIcon } from '../../assets';
import {
  Border,
  Brick,
  Button,
  delay,
  mapColorToBackground,
  Overlay,
  Padding,
  PriceText,
  Stack,
  useBottomSheet,
  useStoreContext,
} from '../../components';
import { MapView, StoreMapMarker } from '../../components/maps';
import { Route } from '../../navigation';
import { usePaymentContext, SUCCESSFUL_PAYMENT } from '../../payment';
import { useShoppingCart } from '../../shopping-cart/shopping-cart-provider';
import {
  CheckoutItemSummary,
  CheckoutOrderItems,
  CheckoutPaymentConfirmation,
  CheckoutPaymentSuccessful,
  CheckoutSelectedStore,
  CheckoutSuggestedItems,
} from '../../subsets/checkout';
import { OrderSuccessfulScreen } from './order-successful-screen';

export const MyCartScreen = () => {
  const { totalPrice } = useShoppingCart();
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const mapRef = useRef<any>();
  const { present } = useBottomSheet();

  const { payWithApple } = usePaymentContext();
  const checkoutAndGoToSuccessScreen = async () => {
    const result = await payWithApple(totalPrice);

    if (result === SUCCESSFUL_PAYMENT) {
      present({
        content: <CheckoutPaymentSuccessful />,
      });
      await delay(2000);
      present({
        snapPoints: [0, '90%'],
        content: <OrderSuccessfulScreen />,
      });
      navigation.navigate(Route.Home);
    }
  };

  const handleContinue = async () => {
    present({ content: <CheckoutPaymentConfirmation handleCheckout={checkoutAndGoToSuccessScreen} />, snapPoints: [0, '40%'] });
  };

  const { selectedStore } = useStoreContext();
  const { location } = selectedStore || {};
  const { latitude, longitude } = location || {};

  return (
    <View style={{ flex: 1, backgroundColor: mapColorToBackground('white.main') }}>
      <Brick relative height={10.2}>
        <MapView
          ref={mapRef}
          initialCamera={{
            center: {
              latitude,
              longitude,
            },
            pitch: 0,
            zoom: 15,
            heading: 0,
            altitude: 0,
          }}
        >
          <StoreMapMarker isSelected={true} coordinate={{ latitude, longitude }}>
            <WoodsCoffeeMapIcon />
          </StoreMapMarker>
        </MapView>
      </Brick>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Padding size={[5, 0, 0, 0]}>
          <Stack size={5}>
            <CheckoutSelectedStore />
            <Border size={[0, 0, 1, 0]} color="gray.darker" />
            <Padding size={[0, 4, 4, 4]}>
              <CheckoutOrderItems />
            </Padding>
            <CheckoutSuggestedItems />
            <Padding size={[0, 4]}>
              <CheckoutItemSummary />
            </Padding>
          </Stack>
        </Padding>
        <Padding size={[7.2, 0]} />
      </ScrollView>

      <Overlay size={[7, undefined, undefined, 4]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon />
        </TouchableOpacity>
      </Overlay>
      <Overlay size={[undefined, 0, 0, 0]} color="white.main">
        <Border size={[0, 0, 0, 0]} color="gray.darker">
          <Padding size={[4, 4, 6, 4]}>
            <Button type="primary" textType="caption1.main" onClick={handleContinue}>
              Continue{' '}
              <PriceText type="caption1.main" color="white.main">
                {totalPrice}
              </PriceText>
            </Button>
          </Padding>
        </Border>
      </Overlay>
    </View>
  );
};
