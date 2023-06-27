import React, { FC, ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Blurhash } from 'react-native-blurhash';
import { mapRoleToBackgroundColor, mapRoleToBackgroundTypes, Overlay } from '../layout';

type BoxType = {
  ratio?: number;
  role?: mapRoleToBackgroundTypes;
  source?: any;
  url?: string;
  width?: string | number;
  height?: string | number;
  children?: ReactNode;
};

export const Box: FC<BoxType> = (props: BoxType) => {
  const { children, ratio = 1, role, url, width, height, source } = props;
  const style = StyleSheet.create({
    container: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      display: 'flex',
      height: height,
      width: width || '100%',
      backgroundColor: mapRoleToBackgroundColor(role),
    },
    innerContainer: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  });

  return (
    <View style={style.container}>
      <ImageBackground source={source || { uri: url }} style={style.image}>
        <View style={style.innerContainer}>{children}</View>
      </ImageBackground>
    </View>
  );
};
