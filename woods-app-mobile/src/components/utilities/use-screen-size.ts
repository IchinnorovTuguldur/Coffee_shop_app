import { Dimensions } from 'react-native';

export const useScreenSize = (percent: number) => {
  return Dimensions.get('screen').width * percent;
};
