import React, { FC, forwardRef, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Padding } from '../layout';
import { Border, mapColorToBorder } from '../layout/border';

type InputType = TextInputProps & { required?: boolean };

export const Input: FC<InputType> = forwardRef((props: InputType, ref?: any) => {
  const { required } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = () => setIsFocused(true);
  const onInputUnfocus = () => setIsFocused(false);

  return (
    <View ref={ref}>
      <Border size={[1]} color={required ? 'red.main' : !isFocused ? 'gray.darker' : 'black.warm'} radius="small">
        <Padding size={[3]}>
          <TextInput
            placeholderTextColor={mapColorToBorder(required ? 'red.main' : 'gray.darker')}
            {...props}
            onFocus={onInputFocus}
            onBlur={onInputUnfocus}
          />
        </Padding>
      </Border>
    </View>
  );
});
