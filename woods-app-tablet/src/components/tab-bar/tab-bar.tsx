import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import _ from 'lodash';
import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Brick, Center, Margin, Padding, Stack, Text} from '../layout';
import {Box} from '../core';
import {LogOutIcon} from '../../assets/icons';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const totalHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: 80,
        height: totalHeight,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        elevation: 10,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.0,
        justifyContent: 'space-between',
      }}>
      <Stack>
        <Margin size={[6.5, 0, 6.4, 0]}>
          <Center>
            <Box
              ratio={0.5}
              width={16}
              source={require('../../assets/images/woods-icon.png')}
            />
          </Center>
        </Margin>
        <Stack size={6}>
          {state.routes.map((route, index) => {
            const {options} = _.get(descriptors, route.key);
            const {tabBarLabel, tabBarIcon} = options || {tabBarIcon: () => {}};
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{height: 40}}
                key={index}>
                <Padding size={[3, 0, 5, 0]}>
                  <Brick middle height="100%">
                    <Stack size={2}>
                      <Center>
                        {tabBarIcon(isFocused ? 'orange.main' : 'gray.dark')}
                      </Center>
                      <Text
                        color={isFocused ? 'orange.main' : 'black.main'}
                        type="footer2.light">
                        {tabBarLabel}
                      </Text>
                    </Stack>
                  </Brick>
                </Padding>
              </TouchableOpacity>
            );
          })}
        </Stack>
      </Stack>

      <Padding size={[0, 0, 5, 0]}>
        <TouchableOpacity>
          <Center>
            <LogOutIcon />
          </Center>
        </TouchableOpacity>
      </Padding>
    </View>
  );
};
