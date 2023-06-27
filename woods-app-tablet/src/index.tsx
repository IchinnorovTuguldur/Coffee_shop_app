import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Routes} from './navigation/routes';
import {TabNavigator} from './navigation/tab';
import {Home} from './screen';
import {Theme} from './theme';

const Stack = createStackNavigator();

const App = () => {
  const initialMetrics =
    Platform.OS === 'android' ? undefined : initialWindowMetrics;
  return (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.Tabs} headerMode="none">
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen name={Routes.Tabs} component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => (
  <Theme>
    <App />
  </Theme>
);
