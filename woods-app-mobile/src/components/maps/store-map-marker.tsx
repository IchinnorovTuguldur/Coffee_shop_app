import React, { forwardRef, ReactElement, useEffect, useRef } from 'react';
import { MarkerAnimated, MarkerProps } from 'react-native-maps';
import LottieView from 'lottie-react-native';

type StoreMapMarkerType = { isSelected?: boolean; children?: ReactElement | ReactElement[] } & MarkerProps;

export const StoreMapMarker = forwardRef<MarkerAnimated, StoreMapMarkerType>((props: StoreMapMarkerType, ref) => {
  const { isSelected, children, ...rest } = props;
  const markerRef = useRef<any>();

  useEffect(() => {
    isSelected && markerRef?.current?.resume();
    !isSelected && markerRef?.current?.reset() && markerRef?.current?.pause();
  }, [isSelected]);

  return (
    <MarkerAnimated ref={ref} {...rest}>
      {children ? (
        children
      ) : (
        <LottieView ref={markerRef} source={require('../../assets/lottie/location-marker.json')} style={{ height: 75, width: 75 }} autoPlay loop />
      )}
      {/* <Image style={{ width: 50, height: 51 }} source={require('../../assets/images/store-marker.png')} /> */}
    </MarkerAnimated>
  );
});
