import messaging from '@react-native-firebase/messaging';
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Alert, AppState } from 'react-native';
import { setBadgeCount } from 'react-native-notification-badge';
import { check, openSettings, request, RESULTS } from 'react-native-permissions';
import { PermissionConstants } from './constants';

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Notifications message', remoteMessage);
});

type PermissionContextType = {
  token: string;
  locationStatus: string;
  openSettings: () => Promise<void>;
  checkLocationPermission: () => Promise<string>;
  requestLocationPermission: () => Promise<void>;
  requestNotificationsPermission: () => Promise<void>;
};

export const PermissionContext = createContext({} as PermissionContextType);

export const PermissionsProvider = ({ children }: { children?: ReactNode }) => {
  const appState = useRef<any>(AppState.currentState);
  const [token, setToken] = useState<string>();
  const [locationStatus, setLocationStatus] = useState<string>();
  const [notificationsStatus, setNotificationsStatus] = useState<any>();

  useEffect(() => {
    requestLocationPermission();
    requestNotificationsPermission();

    const messagingSubscription = messaging().onMessage(async (remoteMessage) => {
      const { notification } = remoteMessage || {};
      const { title, body } = notification || {};
      Alert.alert(title, body);
    });

    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      messagingSubscription;
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = async (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      // console.log('App has come to foreground');
      await setBadgeCount(0);
    }

    appState.current = nextAppState;
    switch (appState.current) {
      case 'inactive':
        await setBadgeCount(0);
        break;
      case 'background':
        await setBadgeCount(2);
        break;
      default:
        await setBadgeCount(1);
        break;
    }
    // console.log('AppState', appState.current);
  };

  const checkNotificationsPermission = async () => {
    const result = await messaging().requestPermission();
    setNotificationsStatus(result);

    return result;
  };

  const requestNotificationsPermission = async () => {
    const result = await checkNotificationsPermission();
    let authToken;
    switch (result) {
      case messaging.AuthorizationStatus.AUTHORIZED:
        authToken = await messaging().getToken();
        setToken(authToken);
        setNotificationsStatus('granted');
        break;
      case messaging.AuthorizationStatus.NOT_DETERMINED:
        setNotificationsStatus('denied');
        break;
      case messaging.AuthorizationStatus.DENIED:
        setNotificationsStatus('blocked');
        await openSettings();
        break;
    }
  };

  const checkLocationPermission = async () => {
    const result = await check(PermissionConstants.Location);

    setLocationStatus(result);
    return result;
  };

  const requestLocationPermission = async () => {
    const result = await checkLocationPermission();

    if (result === RESULTS.DENIED) {
      await request(PermissionConstants.Location);
    }
  };

  const ProviderValues = {
    token,
    locationStatus,
    notificationsStatus,
    requestLocationPermission,
    checkLocationPermission,
    requestNotificationsPermission,
    openSettings,
  };
  return <PermissionContext.Provider value={ProviderValues}>{children}</PermissionContext.Provider>;
};

export const usePermissions = () => useContext(PermissionContext);
