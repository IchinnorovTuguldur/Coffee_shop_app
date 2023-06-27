import { ColorTypes } from '../../theme';
import { mapRoleToBackgroundTypes } from '../../components/layout/background';

export type IconType = {
  height?: number | string;
  width?: number | string;
  size?: number | string;
  color?: ColorTypes;
  role?: mapRoleToBackgroundTypes;
  rawColor?: string;
};
