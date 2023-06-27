import React from 'react';
import { Dimensions } from 'react-native';
import { Box } from '../core';
import { Center, Padding } from '../layout';

export const Footer = () => {
  return (
    <Padding size={[5, 4]}>
      <Center>
        <Box ratio={7} width={Dimensions.get('window').width / 2.2} source={require('../../assets/images/woods-logo.png')} />
      </Center>
    </Padding>
  );
};
