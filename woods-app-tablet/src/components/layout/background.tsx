import styled, { css } from 'styled-components';
import { colors, ColorTypes } from '../../theme';
import _ from 'lodash';
import { View } from 'react-native';

const mapRoleToBackground = {
  primary: colors.green.main,
  secondary: colors.ceramic.main,
  tertiary: colors.cream.main,
  success: colors.green.main,
  alert: colors.yellow.main,
  error: colors.red.main,
  light: colors.white.main,
  dark: colors.black.main,
  transparent: colors.transparent.main,
};

export type mapRoleToBackgroundTypes = keyof typeof mapRoleToBackground;

export type BackgroundType = {
  backgroundRole?: mapRoleToBackgroundTypes;
  backgroundColor?: ColorTypes;
};

export const mapColorToBackground = (color: ColorTypes) => _.get(colors, color || 'white.main');

export const mapRoleToBackgroundColor = (role: mapRoleToBackgroundTypes) => _.get(mapRoleToBackground, role || 'transparent');

export const BackgroundStyle = css<BackgroundType>`
  background-color: ${({ backgroundRole, backgroundColor }) =>
    backgroundColor ? mapColorToBackground(backgroundColor) : mapRoleToBackgroundColor(backgroundRole)};
`;

export const Background = styled(View)`
  ${BackgroundStyle}
`;
