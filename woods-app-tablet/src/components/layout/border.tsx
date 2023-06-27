import _ from 'lodash';
import { View } from 'react-native';
import styled, { css } from 'styled-components';
import { colors, ColorTypes } from '../../theme';
import { BackgroundStyle, BackgroundType } from './background';
import { DimensionStyle, DimensionType } from './dimension';

export const mapRoleToBorder = {
  primary: colors.black.main,
  secondary: colors.ceramic.main,
  tertiary: colors.cream.main,
  success: colors.green.main,
  alert: colors.yellow.main,
  error: colors.red.main,
  light: colors.white.main,
  dark: colors.black.main,
  transparent: colors.transparent.main,
};

export const mapBorderRadius = {
  small: '3px',
  medium: '5px',
  large: '8px',
  xlarge: '20px',
};

export const mapBorderSize = {
  none: 0,
  small: 1,
  default: 2,
  thick: 3,
};

export type BorderRoleType = keyof typeof mapRoleToBorder;

export type BorderType = {
  radius?: keyof typeof mapBorderRadius;
  role?: keyof typeof mapRoleToBorder;
  size?: number[];
  color?: ColorTypes;
  radiusSize?: number[];
};

export const mapRoleToBorderColor = (role: BorderRoleType) => {
  return _.get(mapRoleToBorder, role);
};

export const mapColorToBorder = (color: ColorTypes) => {
  return _.get(colors, color || 'gray.90');
};

const buildBorderSize = (side, size) => {
  if (!_.isArray(size)) {
    return 0;
  }

  switch (_.size(size)) {
    case 4:
      switch (side) {
        case 'top':
          return `${_.get(size, '0')}px`;
        case 'right':
          return `${_.get(size, '1')}px`;
        case 'bottom':
          return `${_.get(size, '2')}px`;
        case 'left':
          return `${_.get(size, '3')}px`;
        default:
          return 0;
      }
    case 3:
      switch (side) {
        case 'top':
          return `${_.get(size, '0')}px`;
        case 'right':
          return `${_.get(size, '1')}px`;
        case 'bottom':
          return `${_.get(size, '2')}px`;
        case 'left':
          return `${_.get(size, '1')}px`;
        default:
          return 0;
      }
    case 2:
      switch (side) {
        case 'top':
          return `${_.get(size, '0')}px`;
        case 'right':
          return `${_.get(size, '1')}px`;
        case 'bottom':
          return `${_.get(size, '0')}px`;
        case 'left':
          return `${_.get(size, '1')}px`;
        default:
          return 0;
      }
    case 1:
      switch (side) {
        case 'top':
          return `${_.get(size, '0')}px`;
        case 'right':
          return `${_.get(size, '0')}px`;
        case 'bottom':
          return `${_.get(size, '0')}px`;
        case 'left':
          return `${_.get(size, '0')}px`;
        default:
          return 0;
      }
    default:
      return 0;
  }
};

export const BorderStyle = css<BorderType>`
  border-top-left-radius: ${({ radiusSize, radius }) => (radius ? _.get(mapBorderRadius, radius) : buildBorderSize('top', radiusSize) || 0)};
  border-top-right-radius: ${({ radiusSize, radius }) => (radius ? _.get(mapBorderRadius, radius) : buildBorderSize('right', radiusSize)) || 0};
  border-bottom-left-radius: ${({ radiusSize, radius }) => (radius ? _.get(mapBorderRadius, radius) : buildBorderSize('bottom', radiusSize)) || 0};
  border-bottom-right-radius: ${({ radiusSize, radius }) => (radius ? _.get(mapBorderRadius, radius) : buildBorderSize('left', radiusSize)) || 0};
  border-width: ${({ size }) => (_.isNumber(size) && size) || 0};
  border-top-width: ${({ size }) => buildBorderSize('top', size)};
  border-right-width: ${({ size }) => buildBorderSize('right', size)};
  border-bottom-width: ${({ size }) => buildBorderSize('bottom', size)};
  border-left-width: ${({ size }) => buildBorderSize('left', size)};
  border-color: ${({ role, color }) => (color ? mapColorToBorder(color) : mapRoleToBorderColor(role || 'transparent'))};
`;

export const Border = styled(View)<BorderType & DimensionType & BackgroundType>`
  ${BorderStyle}
  ${BackgroundStyle}
  ${DimensionStyle}
  border-style: solid;
  position: relative;
  overflow: hidden;
`;
