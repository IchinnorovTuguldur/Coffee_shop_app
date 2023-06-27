import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { Grid, ItemPreview, mapColorToBackground, Padding, Text } from '../../components';
import { TabBarTop } from '../../components/tab-bar';
import _ from 'lodash';
import { Drinks } from '../../assets/drinks';
import { useNavigation } from '@react-navigation/core';
import { Route } from '../../navigation';

const Tab = createMaterialTopTabNavigator();

const HotDrinks = () => {
  const navigation = useNavigation();

  const onItemSelect = (item) => {
    navigation.navigate(Route.ItemSelect, item);
  };
  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <Padding size={[4]}>
        <Grid columns={2} gap={4}>
          {_.map(Drinks, (drink, index) => {
            return <ItemPreview {...drink} widthRatio={0.445} onSelect={() => onItemSelect(drink)} key={index} />;
          }).slice(0, 4)}
        </Grid>
      </Padding>
    </View>
  );
};

const IcedDrinks = () => {
  const navigation = useNavigation();

  const onItemSelect = (item) => {
    navigation.navigate(Route.ItemSelect, item);
  };
  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <Padding size={[4]}>
        <Grid columns={2} gap={4}>
          {_.map(Drinks, (drink, index) => {
            return <ItemPreview {...drink} widthRatio={0.445} onSelect={() => onItemSelect(drink)} key={index} />;
          }).slice(0, 4)}
        </Grid>
      </Padding>
    </View>
  );
};

export const DrinkSelections = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBarTop {...props} />}
      tabBarOptions={{ indicatorStyle: { backgroundColor: mapColorToBackground('orange.main') } }}
    >
      <Tab.Screen name="Hot" component={HotDrinks} />
      <Tab.Screen name="Iced" component={IcedDrinks} />
      <Tab.Screen name="Blended" component={IcedDrinks} />
      <Tab.Screen name="Sugar Free" component={IcedDrinks} />
    </Tab.Navigator>
  );
};
