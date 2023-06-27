import _ from 'lodash';
import React from 'react';
import styled, { css } from 'styled-components/native';
import { ColorTypes } from '../../theme';
import { BackgroundStyle, BackgroundType, mapRoleToBackgroundColor } from './background';
import { DimensionStyle, DimensionType } from './dimension';

export type BrickType = DimensionType &
  BackgroundType & {
    shadow?: boolean;
    shadowColor?: ColorTypes;
    row?: boolean;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    space?: 'between' | 'around' | 'evenly';
    flex?: number;
    children?: any;
    relative?: boolean;
  };

const RowStyle = css`
  flex-direction: ${({ row }: { row?: boolean }) => (row ? 'row' : 'column')};
`;

const CenterStyle = css`
  align-self: center;
  align-items: center;
`;

const MiddleStyle = css`
  align-self: center;
  align-content: center;
  justify-content: center;
`;

const TopStyle = css`
  align-self: flex-start;
`;

const BottomStyle = css`
  align-self: flex-end;
`;

const SpaceStyle = css`
  justify-content: ${({ space }: { space?: 'between' | 'around' | 'evenly' }) => (space ? `space-${space}` : 'flex-start')};
`;
const PositionStyle = css`
  position: ${({ absolute }: { absolute?: boolean }) => (absolute ? 'absolute' : 'relative')};
`;

const FlexStyle = css`
  ${({ flex }: { flex?: number }) => _.isNumber(flex) && !_.isNil(flex) && `flex: ${flex}`};
`;

export const BrickStyle = css<BrickType>`
  ${RowStyle};
  ${({ center }) => center && CenterStyle};
  ${({ middle }) => middle && MiddleStyle};
  ${({ top }) => top && TopStyle};
  ${({ bottom }) => bottom && BottomStyle};
  ${({ space }) => space && SpaceStyle};
  ${FlexStyle}
  ${PositionStyle}
  ${DimensionStyle};
  ${BackgroundStyle}
`;

export const RawBrick = styled.View<BrickType>`
  ${BrickStyle};
`;

export const Brick = (props: BrickType) => {
  const { shadow, shadowColor, children } = props;
  const BrickStyles = [
    shadow && {
      shadowColor: mapRoleToBackgroundColor('primary') || shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 1,
    },
  ];

  return (
    <RawBrick style={BrickStyles} {...props}>
      {children}
    </RawBrick>
  );
};
