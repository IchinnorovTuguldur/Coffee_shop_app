import styled, { css } from 'styled-components';
import { fibonacci } from '../utilities';
import _ from 'lodash';
import { View } from 'react-native';

export type DimensionType = {
  overflow?: 'visible' | 'hidden' | 'scroll';
  height?: string | number;
  width?: string | number;
  length?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
};

export const dimensionToStyle = (size: any, baseSpace: number) => {
  if (_.isUndefined(size)) {
    return 'auto';
  }

  return _.isString(size) ? size : `${fibonacci(size) * baseSpace}px`;
};

export const DimensionStyle = css<DimensionType>`
  width: ${({ width, length, theme }) => dimensionToStyle(width || length, theme.baseSpace)};
  height: ${({ height, length, theme }) => dimensionToStyle(height || length, theme.baseSpace)};
  min-height: ${({ minHeight, theme }) => dimensionToStyle(minHeight, theme.baseSpace)};
  min-width: ${({ minWidth, theme }) => dimensionToStyle(minWidth, theme.baseSpace)};
  max-height: ${({ maxHeight, theme }) => dimensionToStyle(maxHeight, theme.baseSpace)};
  max-width: ${({ maxWidth, theme }) => dimensionToStyle(maxWidth, theme.baseSpace)};
  overflow: ${({ overflow }) => overflow || 'visible'};
`;

export const Dimensions = styled(View)`
  ${DimensionStyle}
`;
