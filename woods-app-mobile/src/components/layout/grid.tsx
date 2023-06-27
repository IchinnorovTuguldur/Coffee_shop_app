import _ from 'lodash';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import { ColorTypes } from '../../theme';
import { fibonacci } from '../utilities';
import { mapColorToBackground } from './background';

const buildGripGap = (rowIndex, columnIndex, gap, rowLength, columnLength) => {
  const { baseSpace } = useTheme();
  const paddingSize = (fibonacci(gap) * baseSpace) / 2;
  const padding = [paddingSize, paddingSize, paddingSize, paddingSize];

  rowIndex === 0 && _.set(padding, '0', 0);
  columnIndex === 0 && _.set(padding, '3', 0);
  columnIndex === columnLength - 1 && _.set(padding, '1', 0);
  rowIndex === rowLength - 1 && _.set(padding, '2', 0);

  return padding;
};

type GridType = {
  children: any;
  columns?: number | number[];
  gap?: number;
  scrollable?: boolean;
  width?: number | string;
  height?: number | string;
  color?: ColorTypes;
};

export const Grid = ({ children, columns = 1, gap = 0, height, width, color }: GridType) => {
  const childrenInArrayFormat = React.Children.toArray(children);
  const childrenCount = React.Children.count(children);

  const columnsLength = _.isArray(columns) ? _.size(columns) : columns;
  const rowLength = _.ceil(childrenCount / columnsLength);

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: mapColorToBackground(color || 'transparent.main'),
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      {_.times(rowLength, (rowIndex) => {
        return (
          <View style={{ flexDirection: 'row' }} key={rowIndex}>
            {_.times(columnsLength, (columnIndex) => {
              const gridGap = buildGripGap(rowIndex, columnIndex, gap, rowLength, columnsLength);
              const flexSize = _.isArray(columns) ? _.get(columns, columnIndex) : 1;
              return (
                <View
                  style={{
                    flex: flexSize || 1,
                    paddingTop: _.get(gridGap, '0'),
                    paddingRight: _.get(gridGap, '1'),
                    paddingBottom: _.get(gridGap, '2'),
                    paddingLeft: _.get(gridGap, '3'),
                  }}
                  key={`${rowIndex}.${columnIndex}`}
                >
                  {_.get(childrenInArrayFormat, rowIndex * columnsLength + columnIndex)}
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};
