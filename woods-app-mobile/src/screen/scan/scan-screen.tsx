import DeviceBrightness from '@adrianso/react-native-device-brightness';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Border, Box, Button, Center, Padding, SafeAreaScreen, Stack, Text, useBottomSheet, useScreenSize, PriceText } from '../../components';
import { Header } from '../../components/header/header';
import { LoyaltyPaymentForm } from '../../components/loyalty/loyalty-payment-form';
import { usePaymentContext } from '../../payment';

export const ScanScreen = () => {
  const { addListener } = useNavigation();
  const { balance } = usePaymentContext();
  const brightnessLevel = useRef(new Animated.Value(0)).current;
  const PERIOD = 60 * 1000 * 5;

  const width = useScreenSize(0.8);
  const { present } = useBottomSheet();

  const onAddFund = () => {
    present({
      content: <LoyaltyPaymentForm />,
    });
  };

  useEffect(() => {
    let currentBrightness = 0.1;

    const focusSubs = addListener('focus', async () => {
      await DeviceBrightness.getBrightnessLevel().then((d) => (currentBrightness = d));
      Animated.timing(brightnessLevel, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      brightnessLevel.addListener(({ value }) => {
        DeviceBrightness.setBrightnessLevel(currentBrightness >= value ? currentBrightness : value);
      });
    });

    const leftSubs = addListener('blur', () => {
      Animated.timing(brightnessLevel, {
        toValue: currentBrightness,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      DeviceBrightness.setBrightnessLevel(currentBrightness || 0.1);
    });

    return () => {
      focusSubs;
      leftSubs;
      brightnessLevel.removeAllListeners();
    };
  }, []);

  return (
    <SafeAreaScreen size={[0]}>
      <Border size={[0, 0, 1, 0]} color="gray.darker">
        <Header />
      </Border>

      <Padding size={[5, 5, 5, 5]}>
        <Stack size={6}>
          <Border size={[1]} color="gray.darker" radius="xlarge">
            <Box ratio={1.9} source={require('../../assets/images/woods-card.png')} />
            <Padding size={[6]}>
              <Stack size={4}>
                <Text alignment="center" role="secondary">
                  Balance
                </Text>
                <PriceText type="subheading2.light" alignment="center">
                  {balance}
                </PriceText>

                <Center>
                  <QRCode size={width * 0.5} value={JSON.stringify({ balance, createdAt: Number(Date.now() / PERIOD).toFixed(0) })} />
                </Center>
              </Stack>
            </Padding>
          </Border>
          <Button type="secondary" onClick={onAddFund}>
            Add funds
          </Button>
        </Stack>
      </Padding>
    </SafeAreaScreen>
  );
};
