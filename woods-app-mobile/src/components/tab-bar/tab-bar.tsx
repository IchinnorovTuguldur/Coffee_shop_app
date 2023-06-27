import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import { Brick, Center, mapColorToBorder, Padding, Stack, Text } from '../layout';

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0));

  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const animateSlider = (index: number) => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  return (
    <View
      style={{
        width: totalWidth,
        height: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        elevation: 10,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.0,
      }}
    >
      <Brick row>
        <Animated.View
          style={{
            top: 0,
            left: 20,
            height: 3,
            borderRadius: 10,
            position: 'absolute',
            backgroundColor: mapColorToBorder('orange.main'),
            transform: [{ translateX: translateValue }],
            width: tabWidth - 40,
          }}
        />

        {state.routes.map((route, index) => {
          const { options } = _.get(descriptors, route.key);
          const { tabBarLabel, tabBarIcon } = options || { tabBarIcon: () => {} };
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

            animateSlider(index);
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
              style={{ flex: 1 }}
              key={index}
            >
              <Padding size={[3, 0, 5, 0]}>
                <Brick middle height="100%">
                  <Stack size={2}>
                    <Center>{tabBarIcon(isFocused ? 'orange.main' : 'gray.dark')}</Center>
                    <Text color={isFocused ? 'orange.main' : 'black.main'} type="footer2.light">
                      {tabBarLabel}
                    </Text>
                  </Stack>
                </Brick>
              </Padding>
            </TouchableOpacity>
          );
        })}
      </Brick>
    </View>
  );
};
