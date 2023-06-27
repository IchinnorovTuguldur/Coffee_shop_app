import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../components';
import { Box } from '../../components/core';
import { Border, Overlay, Padding, Queue, Stack, Text } from '../../components/layout';

export const WorkAtWoodsPreview = () => {
  return (
    <TouchableOpacity>
      <Padding size={[0, 4]}>
        <Border radius="small">
          <Box ratio={1.7} url="https://woodscoffee.com/wp-content/uploads/2015/01/into-the-woods-scaled.jpg" />
          <Overlay size={[0, 0, 0, 0]}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)']}
              style={{ overflow: 'visible', backgroundColor: 'transparent', height: '100%', width: '100%' }}
            />
          </Overlay>
          <Overlay size={[0, 0, 0, 0]}>
            <Padding size={[4]}>
              <View style={{ height: '100%', justifyContent: 'center' }}>
                <Stack size={4} width="50%">
                  <Text color="white.main" type="subheading2.bold" numberOfLines={2}>
                    WORK AT{' '}
                    <Text color="white.main" type="subheading1.bold">
                      WOODS
                    </Text>
                  </Text>
                  <Queue>
                    <Button type="secondary" onClick={() => {}}>
                      Apply Now
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
