import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useTheme } from 'styled-components/native';
import { BackIcon, WoodsCoffeeMapIcon } from '../../assets';
import { Overlay, StorePreview, useScreenSize, useStoreContext } from '../../components';
import { MapView, StoreMapMarker } from '../../components/maps';
import { Route } from '../../navigation/routes';
import { usePermissions } from '../../permissions';

const { width: viewportWidth } = Dimensions.get('window');
const STORES = [
  {
    name: 'BAKERVIEW SQUARE',
    images: [
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-1.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-2.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-3.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-4.jpg',
    ],
    location: {
      latitude: 48.770096,
      longitude: -122.448238,
      name: 'Bellingham, WA',
      address: '428 W. Bakerview Rd. Bellingham, WA 98226',
    },
    contact: {
      phone: '(360) 738-7742',
    },
    hours: {
      monday: {
        dayOfWeek: 'MONDAY',
        opensAt: '5:30 AM',
        closesAt: '6:00 PM',
        timezone: 'PST',
      },
    },
  },
  {
    name: 'BARKLEY VILLAGE',
    images: [
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-barkley-7.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-barkley-1.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-barkley-8.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-barkley-6.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-barkley-4.jpg',
    ],
    location: {
      latitude: 48.790446,
      longitude: -122.495909,
      name: 'Bellingham, WA',
      address: '3008 Cinema Place Bellingham, WA 98226',
    },
    contact: {
      phone: '(360) 933-1695',
    },
    hours: {
      monday: {
        dayOfWeek: 'MONDAY',
        opensAt: '5:30 AM',
        closesAt: '6:00 PM',
        timezone: 'PST',
      },
    },
  },
  {
    name: 'BELLEVUE SQUARE',
    images: [
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-1.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-2.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-3.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellevue-bellevue-square-4.jpg',
    ],
    location: {
      latitude: 47.616197,
      longitude: -122.204959,
      name: 'Bellevue, WA',
      address: '2002 Bellevue Square, Bellevue WA 98004',
    },
    contact: {
      phone: '(425) 429-7276',
    },
    hours: {
      monday: {
        dayOfWeek: 'MONDAY',
        opensAt: '5:30 AM',
        closesAt: '6:00 PM',
        timezone: 'PST',
      },
    },
  },
];

export const SelectStoreScreen = () => {
  const navigation = useNavigation();
  const mapRef = useRef<any>();
  const [currentItem, setCurrentItem] = useState<any>();
  const { requestLocationPermission } = usePermissions();
  const { availableStores, setSelectedStore, selectedStore } = useStoreContext();
  const enableLocationPermission = async () => {
    await requestLocationPermission();
  };
  useEffect(() => {
    enableLocationPermission();
    !selectedStore && onSelect(0);
  }, []);
  const onSelect = (index) => {
    const {
      location: { latitude, longitude },
    } = STORES[index];
    mapRef.current.animateCamera(
      {
        center: { latitude, longitude },
        heading: 0,
        pitch: 0,
      },
      { duration: 250 },
    );
    setCurrentItem(index);
    setSelectedStore(availableStores[index]);
  };
  const { baseSpace } = useTheme();
  const itemHorizontalMargin = baseSpace * 2;
  const slideWidth = useScreenSize(0.75);
  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  const goBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        initialCamera={{
          center: {
            latitude: 48.770096,
            longitude: -122.448238,
          },
          pitch: 0,
          zoom: 15,
          heading: 0,
          altitude: 0,
        }}
      >
        {_.map(availableStores, (store, index) => {
          return (
            <StoreMapMarker
              key={index}
              isSelected={currentItem === index}
              coordinate={{ latitude: store?.location?.latitude, longitude: store?.location?.longitude }}
            >
              <WoodsCoffeeMapIcon />
            </StoreMapMarker>
          );
        })}
      </MapView>
      <Overlay size={[7, undefined, undefined, 6]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon />
        </TouchableOpacity>
      </Overlay>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 40,
        }}
      >
        <Carousel
          layout={'default'}
          layoutCardOffset={9}
          hasParallaxImages={true}
          data={availableStores}
          renderItem={({ item }) => {
            return <StorePreview {...item} onSelect={goBack} />;
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={onSelect}
        />
      </View>
    </View>
  );
};
