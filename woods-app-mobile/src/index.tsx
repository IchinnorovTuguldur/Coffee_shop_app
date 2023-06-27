import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './authentication/auth-provider';
import { BottomSheetProvider, StoreProvider } from './components';
import { Route } from './navigation/routes';
import { TabNavigator } from './navigation/tab';
import { PaymentProvider } from './payment';
import { PermissionsProvider } from './permissions';
import { CheckoutStackNavigator } from './screen/checkout';
import { ItemSelectScreen } from './screen/item/item-select-screen';
import { AuthStackNavigator } from './screen/login';
import { SelectStoreScreen } from './screen/store/select-store-screen';
import { Test } from './screen/test';
import { ShoppingCartProvider } from './shopping-cart/shopping-cart-provider';
import { Theme } from './theme';

const Stack = createStackNavigator();

const App = () => {
  const initialMetrics = Platform.OS === 'android' ? undefined : initialWindowMetrics;
  return (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Route.Tabs} headerMode="none">
          <Stack.Screen name={Route.SelectStore} component={SelectStoreScreen} />
          <Stack.Screen name={Route.CheckoutHome} component={CheckoutStackNavigator} />
          <Stack.Screen name={Route.Tabs} component={TabNavigator} />
          <Stack.Screen name={Route.ItemSelect} component={ItemSelectScreen} />
          <Stack.Screen name={Route.AuthenticationHome} component={AuthStackNavigator} />
          <Stack.Screen name={Route.Test} component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => (
  <Theme>
    <PermissionsProvider>
      <AuthProvider>
        <ShoppingCartProvider>
          <StoreProvider>
            <PaymentProvider>
              <BottomSheetProvider>
                <App />
              </BottomSheetProvider>
            </PaymentProvider>
          </StoreProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </PermissionsProvider>
  </Theme>
);
