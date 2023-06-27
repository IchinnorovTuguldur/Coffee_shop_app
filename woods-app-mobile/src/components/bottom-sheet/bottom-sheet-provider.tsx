import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { delay } from '../../components';

type BottomSheetContextType = {
  present: ({ content, index }: { content: ReactNode; index?: number; snapPoints?: (string | number)[] }) => void;
  close: () => void;
  setSnapPoints: Dispatch<SetStateAction<(string | number)[]>>;
};
const BottomSheetContext = createContext<BottomSheetContextType>({} as BottomSheetContextType);

type BottomSheetProviderType = { children?: ReactNode };

export const BottomSheetProvider = ({ children }: BottomSheetProviderType) => {
  const ref = useRef<BottomSheet>(null);
  const [content, setContent] = useState<ReactNode>();
  const [dynamicSnapPoints, setSnapPoints] = useState<(string | number)[]>([0, '40%']);
  const snapPoints = useMemo(() => dynamicSnapPoints, [dynamicSnapPoints]);
  const present = useCallback(async ({ content, index, snapPoints }: { content: ReactNode; index?: number; snapPoints?: (string | number)[] }) => {
    setSnapPoints(snapPoints || [0, '40%']);
    await delay(200);
    ref.current.snapTo(index || 1);
    setContent(content);
  }, []);

  const close = useCallback(() => {
    ref?.current?.close();
  }, []);
  return (
    <BottomSheetContext.Provider value={{ present, close, setSnapPoints }}>
      {children}
      <BottomSheet
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        animateOnMount={true}
        animationDuration={250}
        style={{
          backgroundColor: 'white',
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowOpacity: 0.03,
          elevation: 16,
        }}
        backdropComponent={BottomSheetBackdrop}
      >
        {content}
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);
