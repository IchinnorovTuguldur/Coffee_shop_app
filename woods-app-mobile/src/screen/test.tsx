import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useMemo } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { mapColorToBackground, Text } from '../components';
import { TabBarTop } from '../components/tab-bar';

const Tab = createMaterialTopTabNavigator();

export const Test = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ margin: 10, height: '100%', width: '100%' }}>
      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: '#888', textTransform: 'uppercase' }}>Saturday 9 January</Text>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>Today</Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView indicatorStyle="white" contentContainerStyle={{ alignItems: 'center' }}></ScrollView>
      </View>
      <Tab.Navigator
        tabBar={(props) => <TabBarTop {...props} />}
        tabBarOptions={{ indicatorStyle: { backgroundColor: mapColorToBackground('orange.main') } }}
      >
        <Tab.Screen name="Processing" component={Test1} />
        <Tab.Screen name="Success" component={Test2} />
        <Tab.Screen name="Canceled" component={Test2} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const Test1 = () => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        style={{
          backgroundColor: 'white',
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 0.03,
          elevation: 16,
        }}
        backdropComponent={BottomSheetBackdrop}
      >
        <Text>Hi2</Text>
      </BottomSheet>
    </View>
  );
};

const Test2 = () => {
  return <Text>Hi2</Text>;
};
