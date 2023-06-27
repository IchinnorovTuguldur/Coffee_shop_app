import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View } from 'react-native';
import { Button, Center, SafeAreaScreen, Text } from '../../components';
import { Route } from '../../navigation/routes';

export const LoginSuccessScreen = () => {
  const navigation = useNavigation();
  const goToHomeScreen = () => {
    navigation.navigate(Route.Home);
  };
  return (
    <SafeAreaScreen>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
        <Center>
          <Text>Congrats!</Text>
        </Center>

        <Center>
          <Button onClick={goToHomeScreen}>Finish</Button>
        </Center>
      </View>
    </SafeAreaScreen>
  );
};
