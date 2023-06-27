import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {InStoreItemsIcon, RecentOrdersIcon} from '../assets/icons';
import {TabBar} from '../components';
import {Home, RecentOrdersScreen} from '../screen';
import {Routes} from './routes';

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tabs.Navigator tabBar={(props: any) => <TabBar {...props} />}>
      <Tabs.Screen
        name={Routes.Home}
        component={Home}
        options={{
          tabBarIcon: (color: any) => <InStoreItemsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name={Routes.RecentOrders}
        component={RecentOrdersScreen}
        options={{
          tabBarIcon: (color: any) => <RecentOrdersIcon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};
