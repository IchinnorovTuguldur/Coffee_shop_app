import _ from 'lodash';
import React, { Children, createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';
import { ProgressBar } from '../core';
import { Brick, Margin } from '../layout';

type FlowType = {
  onNext?: (func?: () => void) => void;
  onPrevious?: (func?: () => void) => void;
  loading?: boolean;
  disabled?: boolean;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export const FlowContext = createContext({} as FlowType);
export const useFlow = () => useContext(FlowContext);

export const Flow = {
  Provider: (
    props: FlowType & {
      children: ReactElement | ReactElement[];
    },
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const onNext = (func?: () => void) => {
      func && func();
      setCurrentIndex((state) => state + 1);
    };
    const onPrevious = (func?: () => void) => {
      func && func();
      setCurrentIndex((state) => Math.max(state - 1, 0));
    };
    const loading = false;
    const disabled = false;
    const { children } = props;
    return <FlowContext.Provider value={{ currentIndex, setCurrentIndex, onNext, onPrevious, loading, disabled }}>{children}</FlowContext.Provider>;
  },
  Content: (
    props: FlowType & {
      children: ReactElement[] | ReactElement;
    },
  ) => {
    const { currentIndex } = useFlow();
    const { children } = props;
    const childrenInArray = Children.toArray(children);
    const childrenCount = Children.count(children);

    return (
      <Brick flex={1}>
        <Margin size={[0, 0, 6, 0]}>
          <ProgressBar current={(currentIndex / childrenCount) * 100} end={((currentIndex + 1) / childrenCount) * 100} />
        </Margin>
        {_.map(childrenInArray, (child, index) => {
          if (_.isEqual(currentIndex, index)) {
            return (
              <Brick height="100%" width="100%" key={index}>
                {child}
              </Brick>
            );
          }
        })}
      </Brick>
    );
  },
};
