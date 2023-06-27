import _ from 'lodash';
import React from 'react';
import {BagIcon, ClockIcon, TickIcon} from '../../assets';
import {Border, Circle, Padding, Queue, Stack, Text} from '../../components';

export const SummaryPreviewComponent = ({count, description, icon}: any) => (
  <Border size={[1]} radius="small" color="gray.darker">
    <Padding size={[5]}>
      <Queue size={4}>
        <Circle size={7.2} color="gray.main">
          {icon}
        </Circle>
        <Stack>
          <Text type="headline.bold">{count || 0}</Text>
          <Text type="footer1.light">{description || ''}</Text>
        </Stack>
      </Queue>
    </Padding>
  </Border>
);

export const RECENT_SUMMARY_TYPES = [
  {description: 'All Order', icon: <BagIcon size={26} />, count: 108},
  {description: 'Waiting', icon: <ClockIcon />, count: 24},
  {description: 'Completed', icon: <TickIcon />, count: 76},
];

export const RecentOrderSummaryPreview = () => {
  return _.map(RECENT_SUMMARY_TYPES, type => (
    <SummaryPreviewComponent {...type} key={type?.description} />
  ));
};
