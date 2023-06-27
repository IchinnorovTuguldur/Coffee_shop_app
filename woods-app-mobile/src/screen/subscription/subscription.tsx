import LinearGradient from 'react-native-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Video from 'react-native-video';
import { Border, Box, Button, Center, Grid, mapColorToBackground, Overlay, Padding, Stack, Text, useScreenSize } from '../../components';

export const Subscription = () => {
  const videoSource = require('../../assets/video/subscriptions.mp4');
  const width = useScreenSize(1);
  const [ready, setReady] = useState<boolean>(false);
  return (
    <View
      style={{
        backgroundColor: mapColorToBackground('black.main'),
        flexGrow: 1,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Box ratio={1} url="https://woodscoffee.com/wp-content/uploads/2020/11/woods-coffee-subscription-coffee.jpg">
          <Video
            source={videoSource}
            ignoreSilentSwitch="ignore"
            style={{
              width: width,
              height: width,
              backgroundColor: 'black',
            }}
            muted
            paused={!ready}
            onReadyForDisplay={() => setReady(true)}
            repeat={true}
            resizeMode={'cover'}
          />
          <Overlay size={[0, 0, 0, 0]}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']}
              style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
            />
          </Overlay>
          <Overlay width="60%" size={[undefined, 4, 5, undefined]}>
            <Stack size={5} justifyContent="flex-end">
              <Text type="headline.bold" color="white.main" alignment="right">
                ENJOY THE ADVENTURE AT HOME!
              </Text>
              <Text type="caption1.main" color="white.main" alignment="right">
                START WITH A FREE BAG OF COFFEE TO TRY IT AT HOME.
              </Text>
              <Text type="footer2.main" color="white.main" alignment="right">
                PAY JUST 99¢ SHIPPING TO GET STARTED.
              </Text>
            </Stack>
          </Overlay>
        </Box>

        <Padding
          size={[0, 4, 10, 4]}
          style={{
            backgroundColor: mapColorToBackground('white.main'),
          }}
        >
          <Grid columns={[1, 1]} gap={4}>
            <Stack>
              <Box url="https://woodscoffee.com/wp-content/uploads/2020/04/woods-coffee-coffee-subscription-2-bags-uai-720x720.jpg" />
              <Border size={[1, 1, 1, 1]} color="gray.darker">
                <Padding size={[5, 0]}>
                  <Stack size={5}>
                    <Stack>
                      <Text alignment="center">$34.99</Text>
                      <Text alignment="center">per delivery</Text>
                    </Stack>
                    <Stack>
                      <Text type="subheading2.light" color="gold.main" alignment="center">
                        2 BAGS
                      </Text>
                      <Text type="footer2.light" alignment="center">
                        $17.50 each
                      </Text>
                    </Stack>
                    <Stack>
                      <Text alignment="center">INCLUDES FREE SHIPPING</Text>
                    </Stack>
                    <Center>
                      <Button type="secondary" onClick={() => {}}>
                        Select
                      </Button>
                    </Center>
                  </Stack>
                </Padding>
              </Border>
            </Stack>
            <Stack>
              <Box url="https://woodscoffee.com/wp-content/uploads/2020/04/woods-coffee-coffee-subscription-3-bags-uai-720x720.jpg" />
              <Border size={[1, 1, 1, 1]} color="gray.darker">
                <Padding size={[5, 0]}>
                  <Stack size={5}>
                    <Stack>
                      <Text alignment="center">$49.99</Text>
                      <Text alignment="center">per delivery</Text>
                    </Stack>
                    <Stack>
                      <Text type="subheading2.light" color="gold.main" alignment="center">
                        3 BAGS
                      </Text>
                      <Text type="footer2.light" alignment="center">
                        $16.66 each
                      </Text>
                    </Stack>
                    <Stack>
                      <Text alignment="center">INCLUDES FREE SHIPPING</Text>
                    </Stack>
                    <Center>
                      <Button type="secondary" onClick={() => {}}>
                        Select
                      </Button>
                    </Center>
                  </Stack>
                </Padding>
              </Border>
            </Stack>
            <Stack>
              <Box url="https://woodscoffee.com/wp-content/uploads/2020/04/woods-coffee-coffee-subscription-4-bags-uai-720x720.jpg" />
              <Border size={[1, 1, 1, 1]} color="gray.darker">
                <Padding size={[5, 0]}>
                  <Stack size={5}>
                    <Stack>
                      <Text alignment="center">$59.99</Text>
                      <Text alignment="center">per delivery</Text>
                    </Stack>
                    <Stack>
                      <Text type="subheading2.light" color="gold.main" alignment="center">
                        4 BAGS
                      </Text>
                      <Text type="footer2.light" alignment="center">
                        $14.99 each • GREAT VALUE!
                      </Text>
                    </Stack>
                    <Stack>
                      <Text alignment="center">INCLUDES FREE SHIPPING</Text>
                    </Stack>
                    <Center>
                      <Button type="secondary" onClick={() => {}}>
                        Select
                      </Button>
                    </Center>
                  </Stack>
                </Padding>
              </Border>
            </Stack>
            <Stack>
              <Box url="https://woodscoffee.com/wp-content/uploads/2020/04/woods-coffee-coffee-subscription-5-lb-uai-720x720.jpg" />
              <Border size={[1, 1, 1, 1]} color="gray.darker">
                <Padding size={[5, 0]}>
                  <Stack size={5}>
                    <Stack>
                      <Text alignment="center">$69.99</Text>
                      <Text alignment="center">per delivery</Text>
                    </Stack>
                    <Stack>
                      <Text type="subheading2.light" color="gold.main" alignment="center">
                        5LB. BULK
                      </Text>
                      <Text type="footer2.light" alignment="center">
                        $13.99/lb. • BEST VALUE
                      </Text>
                    </Stack>
                    <Stack>
                      <Text alignment="center">INCLUDES FREE SHIPPING</Text>
                    </Stack>
                    <Center>
                      <Button type="secondary" onClick={() => {}}>
                        Select
                      </Button>
                    </Center>
                  </Stack>
                </Padding>
              </Border>
            </Stack>
          </Grid>
        </Padding>
      </ScrollView>
    </View>
  );
};
