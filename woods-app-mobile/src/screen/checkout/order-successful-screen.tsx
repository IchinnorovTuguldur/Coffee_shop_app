import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { WalkingIcon } from '../../assets';
import { Border, Box, Button, Center, Grid, Overlay, Padding, SafeAreaScreen, Stack, Text, useScreenSize, useStoreContext } from '../../components';

export const OrderSuccessfulScreen = () => {
  const cardWidth = useScreenSize(0.95);
  const { selectedStore } = useStoreContext();
  const { name, location, images } = selectedStore || {};
  const { address } = location || {};
  const { openSelectedStore } = useStoreContext();
  return (
    <SafeAreaScreen>
      <Padding size={[0, 4]}>
        <Stack size={6}>
          <Stack size={4}>
            <Padding size={[6, 0, 0, 0]}>
              <Text type="subheading2.bold">See you soon!</Text>
            </Padding>
            <Text type="footer1.light">
              Estimated pick-up time is <Text type="footer1.bold">3:09PM</Text>
            </Text>
          </Stack>
          <Stack size={4}>
            <Text>Your store</Text>
            <Padding>
              <Border radius="large">
                <Box
                  width={cardWidth}
                  ratio={1.7}
                  url={images[0]}
                />
                <Overlay size={[0, 0, 0, 0]}>
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']}
                    style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
                  />
                </Overlay>
                <Overlay size={[undefined, 0, 0, 0]}>
                  <Padding size={[4]}>
                    <Stack size={2}>
                      <Text color="white.main">{name}</Text>
                      <Text color="white.main" type="footer1.light">
                        {address}
                      </Text>
                    </Stack>
                  </Padding>
                </Overlay>
              </Border>
            </Padding>
          </Stack>
          <Stack size={4}>
            <Text>How to pick-up</Text>
            <Grid columns={[1, 7]}>
              <WalkingIcon />
              <Center flex={1}>
                <Text type="footer1.light">Head to the pickup counter on entryway handoff and ask the barista for an order for #34</Text>
              </Center>
            </Grid>
          </Stack>
        </Stack>
      </Padding>
      <Overlay size={[undefined, 0, 6, 0]}>
        <Padding size={[0, 4]}>
          <Button type="primary" onClick={openSelectedStore}>
            Directions
          </Button>
        </Padding>
      </Overlay>
    </SafeAreaScreen>
  );
};
