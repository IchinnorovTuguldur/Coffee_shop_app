import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeIcon, LoyaltyIcon, ScanIcon, SubscriptionIcon, ShoppingCartIcon } from '../assets/icons';
import { TabBar } from '../components/tab-bar';
import { CheckoutStackNavigator, Home } from '../screen';
import { LoyaltyStackNavigator } from '../screen/loyalty';
import { ScanStackNavigator } from '../screen/scan';
import { SubscriptionStackNavigator } from '../screen/subscription';
import { Route } from './routes';

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name={Route.Home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (color: any) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name={Route.ScanLanding}
        component={ScanStackNavigator}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: (color: any) => <ScanIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name={Route.SubscriptionLanding}
        component={SubscriptionStackNavigator}
        options={{
          tabBarLabel: 'Subscription',
          tabBarIcon: (color: any) => <SubscriptionIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name={Route.LoyaltyLanding}
        component={LoyaltyStackNavigator}
        options={{
          tabBarLabel: 'Loyalty',
          tabBarIcon: (color: any) => <LoyaltyIcon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};
