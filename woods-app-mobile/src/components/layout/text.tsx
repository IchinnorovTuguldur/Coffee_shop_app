import _ from 'lodash';
import { Text as RawText } from 'react-native';
import styled, { css } from 'styled-components';
import { colors, ColorTypes } from '../../theme/colors';
import { TypographyTypes, TYPOGRAPHY_CSS } from '../../theme/typography';
import { DimensionStyle, DimensionType } from './dimension';

const mapRoleToText = {
  default: colors.black.main,
  primary: colors.green.main,
  secondary: colors.gray.dark,
  tertiary: colors.cream.main,
  success: colors.green.apron,
  alert: colors.yellow.main,
  error: colors.red.main,
  light: colors.white.main,
  dark: colors.black.main,
};

type mapRoleToTextType = keyof typeof mapRoleToText;

export type TextStyleType = {
  role?: mapRoleToTextType;
  color?: ColorTypes;
  underlined?: boolean;
  type?: TypographyTypes;
  alignment?: 'left' | 'right' | 'center';
};

const mapRoleToTextColor = (role: mapRoleToTextType) => _.get(mapRoleToText, role || 'default');
const mapColorToText = (color: ColorTypes) => _.get(colors, color || 'gray.main');

export const TextStyle = css<TextStyleType>`
  ${({ type }) => {
    return _.get(TYPOGRAPHY_CSS, type || 'paragraph.main');
  }}
  font-family: 'Open Sans';
  text-decoration: ${({ underlined }) => underlined && 'underline'};
  text-decoration-color: ${({ color, role }) => (color ? mapColorToText(color) : mapRoleToTextColor(role))};
  text-align: ${({ alignment }) => alignment || 'left'};
  color: ${({ color, role }) => (color ? mapColorToText(color) : mapRoleToTextColor(role))};
`;

export const Text = styled(RawText)<TextStyleType & DimensionType>`
  ${TextStyle}
  ${DimensionStyle}
`;
