import React from 'react';
import { Linking } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { InstagramLogo, TwitterLogo } from '../../assets';
import { Center, Overlay, Padding, RemoteImage, SafeAreaScreen, Stack, Text } from '../../components';

export const Loyalty = () => {
  const openInstagram = async () => {
    await Linking.canOpenURL('instagram://').then(
      () => Linking.openURL('instagram://user?username=woodscoffee'),
      () => Linking.openURL('https://www.instagram.com/woodscoffee/'),
    );
  };

  const openTwitter = async () => {
    await Linking.canOpenURL('twitter://').then(
      () => Linking.openURL('twitter://user?screen_name=woodscoffee'),
      () => Linking.openURL('https://twitter.com/WoodsCoffee'),
    );
  };

  return (
    <SafeAreaScreen size={[0]}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <Padding>
          <RemoteImage ratio={1.5} url="https://woodscoffee.com/wp-content/uploads/2017/06/woods-coffee-outdoor-package-giveaway.jpg" />

          <Overlay size={[0, 0, 0, 0]}>
            <Center flex={1}>
              <Text type="caption1.main" color="white.main">
                FOLLOW @WOODSCOFFEE ON
              </Text>
              <TouchableOpacity onPress={openInstagram}>
                <InstagramLogo color="white.main" height={60} width={200} />
              </TouchableOpacity>
            </Center>
          </Overlay>
        </Padding>

        <Padding>
          <RemoteImage ratio={1} url="https://woodscoffee.com/wp-content/uploads/2015/01/woods-coffee-mountains-scaled.jpg" />
          <Overlay size={[0, 0, 0, 0]}>
            <Center flex={1}>
              <Stack alignVertical="center">
                <Text type="headline.bold" color="white.main">
                  Climb the Mountains
                </Text>
                <Text type="subheading2.bold" color="white.main">
                  And Get Their Good Tidings.
                </Text>
                <Text type="footer1.light" color="white.main">
                  John Muir
                </Text>
              </Stack>
            </Center>
          </Overlay>
        </Padding>

        <Padding>
          <RemoteImage ratio={1} url="https://woodscoffee.com/wp-content/uploads/2015/01/into-the-woods-scaled.jpg" />
          <Overlay size={[0, 0, 0, 0]}>
            <Center flex={1}>
              <Text type="caption1.main" color="white.main">
                FOLLOW @WOODSCOFFEE ON
              </Text>
              <TouchableOpacity onPress={openTwitter}>
                <TwitterLogo color="white.main" height={60} width={200} />
              </TouchableOpacity>
            </Center>
          </Overlay>
        </Padding>
        <Padding size={[5.1, 0]} />
      </ScrollView>
    </SafeAreaScreen>
  );
};
