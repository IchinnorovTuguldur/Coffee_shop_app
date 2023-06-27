import React, { forwardRef, ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import RNMapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import MapStyle from '../../assets/maps/map-style.json';

interface MapViewProps {
  center?: Region;
  children: ReactElement | ReactElement[];
  initialCamera?: any;
}

const style = StyleSheet.create({
  map: {
    flex: 2,
    flexGrow: 2,
  },
});

export const MapView = forwardRef<RNMapView, MapViewProps>((props: MapViewProps, ref) => {
  const { center, children, initialCamera } = props;
  return (
    <RNMapView
      ref={ref}
      initialCamera={initialCamera}
      pitchEnabled={true}
      rotateEnabled={true}
      zoomEnabled={true}
      scrollEnabled={true}
      customMapStyle={MapStyle}
      style={style.map}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      showsUserLocation={true}
      showsMyLocationButton={true}
      maxDelta={0.001}
      showsIndoors={false}
      showsBuildings={false}
      loadingEnabled={true}
      // region={{ ...center, latitudeDelta: 0.003, longitudeDelta: 0.003 }}
    >
      {children}
    </RNMapView>
  );
});
