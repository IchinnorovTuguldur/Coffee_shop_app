import React, { ReactNode, useState } from 'react';
import { TextInputProps } from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import { Border, Center, Grid, mapColorToBorder, Padding } from '../layout';

type MaskedInputType = TextInputProps & {
  leftIcon?: ReactNode;
  mask?: string;
  required?: boolean;
};

export const MaskedInput = (props: MaskedInputType) => {
  const { required, leftIcon } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = () => setIsFocused(true);
  const onInputUnfocus = () => setIsFocused(false);
  return (
    <Border size={[1]} color={required ? 'red.main' : !isFocused ? 'gray.darker' : 'black.warm'} radius="small">
      <Padding size={[3]}>
        <Grid columns={leftIcon ? [1, 9] : 1}>
          <Center>{leftIcon}</Center>
          <TextInputMask
            placeholderTextColor={mapColorToBorder(required ? 'red.main' : 'gray.darker')}
            {...props}
            onFocus={onInputFocus}
            onBlur={onInputUnfocus}
          />
        </Grid>
      </Padding>
    </Border>
  );
};
