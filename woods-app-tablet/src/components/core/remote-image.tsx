import React, { useState } from 'react';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Blurhash } from 'react-native-blurhash';
import FastImage from 'react-native-fast-image';
import { Overlay } from '../layout';

type RemoteImageType = {
  url?: string;
  ratio?: number;
  width?: string | number;
  source?: Record<string, unknown>;
  resizeMode?: 'cover' | 'contain' | 'stretch';
};

export const RemoteImage = ({ source, url, ratio = 1, resizeMode = 'cover', width }: RemoteImageType) => {
  const [ready, setReady] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width,
      }}
    >
      <Overlay size={[0, 0, 0, 0]}>
        <Animatable.View easing="ease-out" iterationCount="infinite" duration={3000} useNativeDriver={true} style={{ height: '100%', width: '100%' }}>
          <Blurhash style={{ flex: 1 }} blurhash="LEHV6nWB2yk8pyoJadR*.7kCMdnj" />
        </Animatable.View>
      </Overlay>
      <Animatable.View animation={ready ? 'fadeIn' : undefined} easing="ease-out" duration={100} useNativeDriver={true}>
        <FastImage
          onLoadEnd={() => !url || (!source && setReady(true))}
          source={source ? source : { uri: url }}
          style={{
            aspectRatio: ratio,
            width: '100%',
          }}
          resizeMode={resizeMode}
        />
      </Animatable.View>
    </View>
  );
};
