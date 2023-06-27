import _ from 'lodash';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TypographyTypes } from '../../theme';
import { Spinner } from '../core';
import { Border, Center, Margin, Padding, Queue, Text } from '../layout';

type ButtonType = {
  type?: 'primary' | 'secondary' | 'tertiary';
  children: any;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  textType?: TypographyTypes;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  buttonSize?: number[];
};

const mapTypeToButton = {
  primary: {
    textColor: 'white.main',
    backgroundColor: 'orange.main',
    borderColor: 'orange.main',
  },
  secondary: {
    textColor: 'orange.main',
    backgroundColor: 'transparent.main',
    borderColor: 'orange.main',
  },
  tertiary: {
    textColor: 'gray.dark',
    backgroundColor: 'transparent.main',
    borderColor: 'white.main',
  },
  disabled: {
    backgroundColor: 'white.main',
    textColor: 'black.warm',
    borderColor: 'gray.darker',
  },
};

export const Button = (props: ButtonType) => {
  const { children, textType, type, onClick, loading, rightIcon, leftIcon, buttonSize, disabled } = props;
  const buttonTypeChecker = disabled ? 'disabled' : type || 'primary';
  return (
    <TouchableOpacity disabled={disabled} onPress={!disabled ? onClick : undefined}>
      <Border
        backgroundColor={_.get(mapTypeToButton, `${buttonTypeChecker}.backgroundColor`)}
        color={_.get(mapTypeToButton, `${buttonTypeChecker}.borderColor`)}
        size={[1, 1, 1, 1]}
        radius="small"
      >
        <Center>
          <Padding size={buttonSize || [2]}>
            <Queue>
              {leftIcon && <Center>{leftIcon}</Center>}
              <Margin size={[1, loading || rightIcon ? 3 : 5, 1, leftIcon ? 3 : 5]}>
                <Text color={_.get(mapTypeToButton, `${buttonTypeChecker}.textColor`)} type={textType || 'paragraph.light'}>
                  {children}
                </Text>
              </Margin>
              {!disabled && loading && (
                <Center>
                  <Spinner size={6} />
                </Center>
              )}
              {!disabled && !loading && rightIcon && <Center>{rightIcon}</Center>}
            </Queue>
          </Padding>
        </Center>
      </Border>
    </TouchableOpacity>
  );
};
