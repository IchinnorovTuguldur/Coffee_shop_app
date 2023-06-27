import moment from 'moment';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BellIcon} from '../assets/icons';
import {
  Border,
  Brick,
  Grid,
  Padding,
  Queue,
  SafeAreaScreen,
  Stack,
  Text,
} from '../components';
import {SummaryPreviewComponent, RECENT_SUMMARY_TYPES} from '../subsets';
import _ from 'lodash';

export const RecentOrdersScreen = () => {
  return (
    <SafeAreaScreen>
      <Padding size={[6, 5, 0, 5]}>
        <Stack size={5}>
          <Brick>
            <Queue justifyContent="space-between">
              <Text type="headline.main">ORDER</Text>
              <TouchableOpacity>
                <Border backgroundColor="gray.darker" radius="small">
                  <Padding size={[3.2]}>
                    <BellIcon size={16} />
                  </Padding>
                </Border>
              </TouchableOpacity>
            </Queue>
            <Text type="caption2.light" color="gray.dark">
              {moment().format('MMMM Do YYYY')}
            </Text>
          </Brick>
          <View style={{height: 100, backgroundColor: 'transparent'}}>
            <Grid columns={[3, 3, 3]} gap={5}>
              {_.map(RECENT_SUMMARY_TYPES, type => (
                <SummaryPreviewComponent {...type} key={type?.description} />
              ))}
            </Grid>
          </View>
        </Stack>
      </Padding>
    </SafeAreaScreen>
  );
};
