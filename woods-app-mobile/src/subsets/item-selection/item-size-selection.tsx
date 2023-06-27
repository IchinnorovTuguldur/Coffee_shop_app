import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CupIcon } from '../../assets';
import { Border, Center, Circle, Grid, Padding, Stack, Text } from '../../components';

const SizeData = ['smallest', 'sprunce', 'ceder', 'redwood', 'giant'];

export const ItemSizeSelection = () => {
  const [selectedSize, setSelectedSize] = useState<any>(0);
  const [translateValue] = useState(new Animated.Value(0));

  const animateCircle = (index: number) => {
    Animated.timing(translateValue, {
      toValue: index * 70.2,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateCircle(selectedSize);
  }, [selectedSize]);

  return (
    <Stack size={4}>
      <Padding size={[5, 5, 3, 5]}>
        <Stack size={2}>
          <Padding size={[0, 4]}>
            <Text type="caption1.bold">Size </Text>
          </Padding>
          <Border size={[1]} color="orange.light" radius="large" />
        </Stack>
      </Padding>
      <Padding size={[0, 5]}>
        <Animated.View style={{ bottom: 16, left: 28, right: 0, position: 'absolute', transform: [{ translateX: translateValue }] }}>
          <Circle size={6.4} borderSize={2} color="orange.light" borderColor="gold.dark" />
        </Animated.View>
        <Grid columns={5} gap={0}>
          {_.map(SizeData, (size: any, index) => {
            const isSelected = index === selectedSize;
            return (
              <TouchableOpacity onPress={() => setSelectedSize(index)} key={index}>
                <Center flex={1}>
                  <Stack size={3} alignVertical="center">
                    <View style={{ height: 40, width: 30, alignItems: 'center' }}>
                      <CupIcon height={40} width={40} type={size} color={isSelected ? 'orange.main' : 'black.main'} />
                    </View>

                    <Text alignment="center" type="footer1.light" color={isSelected ? 'orange.main' : 'gray.dark'}>
                      {_.upperFirst(size)}
                    </Text>
                  </Stack>
                </Center>
              </TouchableOpacity>
            );
          })}
        </Grid>
      </Padding>
    </Stack>
  );
};
