import _ from 'lodash';
import React, { FC, useState } from 'react';
import { Pressable, View } from 'react-native';
import { MinusIcon, PlusIcon } from '../../assets';
import { Circle } from '../core';
import { Border, Brick, Center, Overlay, Padding, Queue, Text } from '../layout';

interface ItemPreviewProps {
  label?: string;
  preview?: string;
  defaultValue?: number;
  maxValue?: number;
}

const mapDefaultValueToCounter = {
  active: {
    borderColor: 'orange.main',
    circleBackgroundColor: 'orange.main',
    circleBorderColor: 'orange.main',
    iconColor: 'white.main',
    textColor: 'orange.main',
  },
  deactive: {
    borderColor: 'gray.darker',
    circleBackgroundColor: 'white.main',
    circleBorderColor: 'orange.main',
    iconColor: 'orange.main',
    textColor: 'gray.dark',
  },
};

export const ItemIngredientCounter: FC<ItemPreviewProps> = (props: ItemPreviewProps) => {
  const { label, preview, defaultValue, maxValue } = props;
  const [counter, setCounter] = useState(defaultValue || 0);
  const handleAddition = () => {
    if (counter >= maxValue) {
      return;
    }
    setCounter(counter + 1);
  };
  const handleSubtraction = () => setCounter(Math.max(counter - 1, 0));
  const isDefaultValue = _.isEqual(defaultValue, counter);
  return (
    <View>
      {counter === 0 && (
        <Padding>
          <Border
            size={[1]}
            color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'borderColor')}
            radius="large"
            backgroundColor={!isDefaultValue ? 'white.main' : 'gray.main'}
          >
            <Padding size={[4, 4]}>
              <Text type="footer1.light">{preview || defaultValue || ''}</Text>
              <Overlay size={[0, 4, 0]}>
                <Center flex={1}>
                  <Pressable onPress={handleAddition}>
                    <Circle
                      size={5}
                      borderColor={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBorderColor')}
                      color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBackgroundColor')}
                    >
                      <View style={{ transform: [{ rotate: '90deg' }] }}>
                        <PlusIcon color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'iconColor')} size={10} />
                      </View>
                    </Circle>
                  </Pressable>
                </Center>
              </Overlay>
            </Padding>
          </Border>
          {!isDefaultValue && (
            <Overlay size={[-2, undefined, undefined, 3]} zIndex={10}>
              <Brick backgroundColor="white.main">
                <Padding size={[2, 2.2]}>
                  <Text type="footnote.light" color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'textColor')}>
                    {label || ''}
                  </Text>
                </Padding>
              </Brick>
            </Overlay>
          )}
        </Padding>
      )}
      {counter > 0 && (
        <Padding>
          <Border size={[1]} color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'borderColor')} radius="large">
            <Padding size={[4, 4]}>
              <Text type="footer1.light">
                {counter} {counter === 1 ? 'Shot' : 'Shots'}
              </Text>
              <Overlay size={[0, 4, 0]}>
                <Center flex={1}>
                  <Queue size={3} alignVertical="center">
                    <Pressable onPress={handleSubtraction}>
                      <Circle
                        size={5}
                        color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBackgroundColor')}
                        borderColor={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBorderColor')}
                      >
                        <MinusIcon color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'iconColor')} width={10} />
                      </Circle>
                    </Pressable>
                    <Text type="footer1.bold">{counter}</Text>
                    <Pressable onPress={handleAddition}>
                      <Circle
                        size={5}
                        color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBackgroundColor')}
                        borderColor={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'circleBorderColor')}
                      >
                        <PlusIcon color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'iconColor')} size={10} />
                      </Circle>
                    </Pressable>
                  </Queue>
                </Center>
              </Overlay>
            </Padding>
          </Border>
          <Overlay size={[-2, undefined, undefined, 3]} zIndex={10}>
            <Brick backgroundColor="white.main">
              <Padding size={[2, 2.2]}>
                <Text type="footnote.light" color={_.get(mapDefaultValueToCounter[!isDefaultValue ? 'active' : 'deactive'], 'textColor')}>
                  {label || ''}
                </Text>
              </Padding>
            </Brick>
          </Overlay>
        </Padding>
      )}
    </View>
  );
};
