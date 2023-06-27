import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';
import { StarsIcon } from '../../assets';
import { Route } from '../../navigation';
import { Border, Brick, Center, Grid, mapColorToBackground, Overlay, Padding, Queue, Stack, Text } from '../layout';

export const LoyaltyPreview = () => {
  const { navigate } = useNavigation();
  const goToScanScreen = () => navigate(Route.ScanLanding);
  const [loyaltyPoints, setLoyaltyPoints] = useState((4 / 12) * 100);
  return (
    <Padding size={[0]}>
      <Border backgroundColor="black.warm" color="gray.darker" size={[0]}>
        <Padding size={[5, 5, 5, 5]}>
          <Stack size={4}>
            <Padding size={[5, 0]}>
              <Grid columns={2}>
                <Center flex={1}>
                  <Brick center>
                    <Text type="headline.main" color="orange.main">
                      {12 - Math.round((12 * loyaltyPoints) / 100)}
                    </Text>
                    <Text type="caption2.light" color="white.main">
                      Points Until
                    </Text>
                    <Text type="caption2.bold" color="white.main">
                      Next Free Drink
                    </Text>
                  </Brick>
                </Center>
                <Border size={[0, 0, 0, 1]} color="orange.main">
                  <Center flex={1}>
                    <Padding>
                      <AnimatedCircularProgress
                        size={120}
                        width={9}
                        backgroundWidth={9}
                        duration={1500}
                        fill={loyaltyPoints}
                        tintColor={mapColorToBackground('orange.main')}
                        backgroundColor={mapColorToBackground('white.main')}
                        easing={Easing.bounce}
                        arcSweepAngle={280}
                        rotation={220}
                        lineCap="square"
                      />
                      <Overlay size={[undefined, 0, -1, 0]}>
                        <Text type="caption1.main" alignment="center" color="white.main">
                          {Math.round((loyaltyPoints / 100) * 12)}/12
                        </Text>
                      </Overlay>
                      <Overlay size={[0, 0, 0, 0]}>
                        <Center flex={1}>
                          <StarsIcon size={40} color="orange.main" />
                        </Center>
                      </Overlay>
                    </Padding>
                  </Center>
                </Border>
              </Grid>
            </Padding>
            <Padding size={[0, 4]}>
              <Center>
                <Queue>
                  <TouchableOpacity onPress={goToScanScreen}>
                    <Border radius="small" color="orange.main" size={[1]}>
                      <Padding size={[2, 4]}>
                        <Text type="caption2.main" color="orange.main" alignment="right">
                          Redeem
                        </Text>
                      </Padding>
                    </Border>
                  </TouchableOpacity>
                </Queue>
              </Center>
            </Padding>
          </Stack>
        </Padding>
      </Border>
    </Padding>
  );
};
