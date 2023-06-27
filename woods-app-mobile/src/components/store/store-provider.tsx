import React, { createContext, FC, ReactNode, useContext, useMemo, useRef, useState } from 'react';
import { Linking, Platform } from 'react-native';

const STORES = [
  {
    name: 'BAKERVIEW SQUARE',
    images: [
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-bakerview-2.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-bakerview-4.jpg',
      'https://woodscoffee.com/wp-content/uploads/2016/01/woods-coffee-bellingham-bakerview-5.jpg',
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

/**
 * Allow the system to decide how to handle this.
 * On iOS it will open Apple Maps.
 * On Android it will open the default, or show the picker
 */
const openSystemMap = (latitude: number, longitude: number, label?: string, formattedAddress?: string) => {
  const latLng = `${latitude},${longitude}`;
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  // use formatted address as a means to query maps if it exists otherwise use lat long
  const mapsUrlWithAddress = `${scheme}${formattedAddress}(${label})`;
  const url = Platform.select({
    ios: formattedAddress ? mapsUrlWithAddress : `${scheme}(${label})@${latLng}`,
    android: formattedAddress ? mapsUrlWithAddress : `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

interface StoreContextType {
  selectedStore?: typeof STORES[0];
  availableStores: typeof STORES;
  setSelectedStore: (store?: typeof STORES[0]) => void;
  openSelectedStore: () => void;
}
const StoreContext = createContext<StoreContextType>({
  availableStores: [],
  setSelectedStore: () => {},
  openSelectedStore: () => {},
});

export const StoreProvider: FC = ({ children }: { children?: ReactNode }) => {
  const [selectedStore, setSelectedStore] = useState<typeof STORES[0]>(STORES[0]);
  const openSelectedStore = () => {
    const { location } = selectedStore;
    const { latitude, longitude, address } = location;
    openSystemMap(latitude, longitude, address);
  };
  return (
    <StoreContext.Provider
      value={{
        selectedStore,
        setSelectedStore,
        openSelectedStore,
        availableStores: STORES,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);
