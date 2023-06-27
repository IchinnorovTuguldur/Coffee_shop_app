import _ from 'lodash';
import React, { Dispatch, isValidElement, ReactElement, SetStateAction, useState } from 'react';
import { Pressable, TouchableHighlight, View } from 'react-native';
import { RightChevronIcon } from '../../assets';
import { useBottomSheet } from '../bottom-sheet';
import { Circle } from '../core';
import { Border, Brick, Center, mapColorToBackground, Overlay, Padding, Queue, Stack, Text } from '../layout';

type DropDownSelectionType = {
  setChosenType?: Dispatch<SetStateAction<string>>;
  types: string[];
  headerLabel?: string;
  defaultValue?: string;
  children?: ReactElement | ReactElement[];
};

export const DropDownSelection = ({ setChosenType, types, headerLabel, children, defaultValue }: DropDownSelectionType) => {
  const isValidChildren = isValidElement(children);
  const { close } = useBottomSheet();
  return isValidChildren ? (
    <React.Fragment>children</React.Fragment>
  ) : (
    <Stack size={2}>
      <Stack size={5}>
        <Padding size={[0, 4]}>
          <Center>
            <Text>{headerLabel || 'Options'}</Text>
          </Center>
        </Padding>
        <Border size={[1]} color="orange.light" radius="large" />
      </Stack>
      <View style={{ flexDirection: 'column' }}>
        {_.map(types, (type, index) => {
          return (
            <TouchableHighlight
              underlayColor={mapColorToBackground('gray.darker')}
              onPress={() => {
                setChosenType(type);
                close();
              }}
              key={index}
            >
              <Padding size={[0, 5]}>
                <Border size={[0, 0, 1, 0]} color="gray.darker">
                  <Padding size={[4, 0]}>
                    <Queue size={4}>
                      <Text type="paragraph.bold">{type}</Text>
                      {defaultValue === type && (
                        <Border size={[1]} color="orange.main" radius="small">
                          <Padding size={[0.5, 3, 0, 3]}>
                            <Text type="footnote.main" color="orange.main">
                              Standard
                            </Text>
                          </Padding>
                        </Border>
                      )}
                    </Queue>
                  </Padding>
                </Border>
              </Padding>
            </TouchableHighlight>
          );
        })}
      </View>
    </Stack>
  );
};

export const DropDown = (props: { label?: string; preview?: string; defaultValue?: string } & DropDownSelectionType) => {
  const { label, preview, defaultValue } = props;
  const [chosenType, setChosenType] = useState<string>(null);
  const { present } = useBottomSheet();

  const handleTypeSelection = () => {
    present({
      content: <DropDownSelection {...props} setChosenType={setChosenType} />,
    });
  };

  return (
    <Pressable onPress={handleTypeSelection}>
      {(_.isNil(chosenType) || _.isEqual(defaultValue, chosenType)) && (
        <Border size={[1]} color="gray.darker" radius="large">
          <Padding size={[4, 5, 4, 4]}>
            <Text type="footer1.main">{defaultValue || preview || ''}</Text>
            <Overlay size={[0, 4, 0]}>
              <Center flex={1}>
                <Circle size={5} borderColor="orange.main">
                  <View style={{ transform: [{ rotate: '90deg' }] }}>
                    <RightChevronIcon size={9} />
                  </View>
                </Circle>
              </Center>
            </Overlay>
          </Padding>
        </Border>
      )}
      {!_.isNil(chosenType) && !_.isEqual(defaultValue, chosenType) && (
        <Padding>
          <Border size={[1]} color="orange.main" radius="large">
            <Padding size={[4, 5, 4, 4]}>
              <Text type="footer1.main">{chosenType}</Text>
              <Overlay size={[0, 4, 0]}>
                <Center flex={1}>
                  <Circle size={5} borderColor="orange.main" color="orange.main">
                    <View style={{ transform: [{ rotate: '90deg' }] }}>
                      <RightChevronIcon size={9} color="white.main" />
                    </View>
                  </Circle>
                </Center>
              </Overlay>
            </Padding>
          </Border>
          <Overlay size={[-2, undefined, undefined, 3]} zIndex={10}>
            <Brick backgroundColor="white.main">
              <Padding size={[2, 2.2]}>
                <Text type="footnote.light" color="orange.main">
                  {label || ''}
                </Text>
              </Padding>
            </Brick>
          </Overlay>
        </Padding>
      )}
    </Pressable>
  );
};
