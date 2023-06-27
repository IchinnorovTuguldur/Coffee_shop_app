import _ from 'lodash';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { ColorTypes } from '../../theme';
import { Circle } from '../core';
import { Brick, Center, Grid, mapColorToBackground, Overlay, Text } from '../layout';

type StepperType = {
  horizontal?: boolean;
  color?: ColorTypes;
  children?: ReactElement | ReactElement[];
};

export const Stepper = (props: StepperType) => {
  const { children, horizontal, color = 'gray.dark' } = props;
  const numberOfSteps = React.Children.count(children) || 4;
  if (horizontal) {
    return (
      <View>
        <Step color={color} horizontal={horizontal} />
        <Step color={color} horizontal={horizontal} />
        <Step color={color} horizontal={horizontal} />
        <Step color={color} horizontal={horizontal} />
      </View>
    );
  }

  return (
    <Brick backgroundColor="white.main" width="100%" middle>
      <Grid columns={[3, 4, 4, 4] || 1}>
        {_.times(numberOfSteps, (number) => {
          return <Step color={color} key={number} />;
        })}
      </Grid>
    </Brick>
  );
};

export const Step = ({ color, horizontal, children }: { color?: ColorTypes; horizontal?: boolean; children?: ReactElement | string }) => {
  if (horizontal) {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ height: 30, width: 2, backgroundColor: mapColorToBackground(color) }} />
        <Circle size={4} color={color} />
      </View>
    );
  }
  return (
    <Overlay relative zIndex={4}>
      <View style={{ height: 1, width: '100%', backgroundColor: mapColorToBackground(color) }} />
      <Overlay size={[0, 0, 0]}>
        <Center flex={1}>
          <Circle size={4} color={color} />
        </Center>
      </Overlay>
      <Overlay size={[undefined, -0.3, -6]}>
        <Text alignment="center" type="footer1.light" color="gray.dark">
          {children}
        </Text>
      </Overlay>
    </Overlay>
  );
};
