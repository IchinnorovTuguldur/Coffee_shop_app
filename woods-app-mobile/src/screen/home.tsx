import React, { useRef } from 'react';
import { Animated, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Border,
  Button,
  Center,
  Footer,
  Header,
  mapColorToBackground,
  Overlay,
  Padding,
  RemoteImage,
  SelectedStore,
  Stack,
  Text,
} from '../components';
import {
  CoffeeSubscriptionPreview,
  DrinkSelections,
  FavoriteDrinks,
  OrderOnlinePreview,
  OurValuesPreview,
  SeasonalDrinks,
  WorkAtWoodsPreview,
} from '../subsets/home';

export const Home = () => {
  const scrollAnimatedValue = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ backgroundColor: mapColorToBackground('white.main'), overflow: 'hidden' }}>
      <Header />
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollAnimatedValue,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SelectedStore scrollAnimatedValue={scrollAnimatedValue} />
        <Padding size={[4, 0, 8, 0]}>
          <Stack size={6}>
            <Padding size={[0, 4]}>
              <TouchableOpacity>
                <Border color="gray.darker" backgroundColor="white.main" radius="medium">
                  <RemoteImage ratio={1.7} url="https://woodscoffee.com/wp-content/uploads/2021/03/citrus-rush-uai-1200x600.png" />
                  <Overlay size={[0, 0, 0, 0]}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']}
                      style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
                    />
                  </Overlay>
                  <Overlay size={[0, 0, 0, 0]}>
                    <Center flex={1}>
                      <Stack size={1}>
                        <Text type="caption1.bold" color="white.main" alignment="center">
                          CITRUS RUSH
                        </Text>
                        <Text type="paragraph.light" color="white.main" alignment="center">
                          NOW WITH IMMUNITY BOOST!
                        </Text>
                        <Center>
                          <Button type="primary" onClick={() => {}}>
                            Order
                          </Button>
                        </Center>
                      </Stack>
                    </Center>
                  </Overlay>
                </Border>
              </TouchableOpacity>
            </Padding>
            <FavoriteDrinks />
            <SeasonalDrinks />
            <DrinkSelections />
            <Stack size={5}>
              <Padding size={[0, 4]}>
                <Text type="caption1.bold">Blogs</Text>
              </Padding>
              <OrderOnlinePreview />
              <CoffeeSubscriptionPreview />
              <WorkAtWoodsPreview />
              <OurValuesPreview />
            </Stack>
          </Stack>
          <Padding size={[2, 0, 0, 0]}>
            <Footer />
          </Padding>
        </Padding>

        <Padding size={[6, 0]} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
