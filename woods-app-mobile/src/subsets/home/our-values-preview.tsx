import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../components';
import { Box } from '../../components/core';
import { Border, Overlay, Padding, Queue, Stack, Text } from '../../components/layout';

export const OurValuesPreview = () => {
  return (
    <TouchableOpacity>
      <Padding size={[0, 4]}>
        <Border radius="small">
          <Box ratio={1.7} url="https://woodscoffee.com/wp-content/uploads/2018/09/Herman-Family-Woods-Coffee.jpg" />
          <Overlay size={[0, 0, 0, 0]}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)']}
              style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
            />
          </Overlay>
          <Overlay size={[0, 0, 0, 0]}>
            <Padding size={[4]}>
              <View style={{ height: '100%', justifyContent: 'center' }}>
                <Stack size={4}>
                  <Stack>
                    <Text color="white.main" type="subheading2.bold" numberOfLines={2}>
                      OUR
                    </Text>
                    <Text color="white.main" type="subheading2.bold" numberOfLines={2}>
                      VALUE
                    </Text>
                  </Stack>
                  <Queue>
                    <Button type="secondary" onClick={() => {}}>
                      Read More
                    </Button>
                  </Queue>
                </Stack>
              </View>
            </Padding>
          </Overlay>
        </Border>
      </Padding>
    </TouchableOpacity>
  );
};
