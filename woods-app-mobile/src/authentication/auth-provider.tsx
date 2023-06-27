import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: FirebaseAuthTypes.User;
  token: FirebaseAuthTypes.IdTokenResult;
  confirmCode: (code) => void;
  signInWithPhoneNumber: (phoneNumber) => void;
  signOut: () => void;
  verifyPhoneNumber: (phoneNumber) => void;
};

export const AuthContext = createContext({} as AuthContextType);

const handleFirebaseAuthenticationError = (error: any) => {
  switch (error) {
    case 'auth/invalid-phone-number':
      console.log('Invalid phone number');
      break;
    case 'auth/app-deleted':
      console.log('FirebaseApp has been deleted.');
      break;
    case 'auth/argument-error':
      console.log('Method called with incorrect arguments.');
      break;
    case 'auth/invalid-api-key':
      console.log('Wrong API Key used');
      break;
    case 'auth/invalid-user-token':
      console.log('User credentials is no longer valid.');
      break;
    case 'auth/invalid-tenant-id':
      console.log('Provided tenantID is no longer valid.');
      break;
    case 'auth/network-request-failed':
      console.log('Network error has occured.');
      break;
    case 'auth/operation-not-allowed':
      console.log('Enable to given operation in Firebase');
      break;
    case 'auth/requires-recent-login':
      console.log('Last sign-in time does not meet the security threshold.');
      break;
    case 'auth/too-many-requests':
      console.log('Requests are blocked due to unusual activity.');
      break;
    case 'auth/unauthorized-domain':
      console.log('App domain is not authorized for OAuth.');
      break;
    case 'auth/user-disabled':
      console.log('User has been disabled by an admin.');
      break;
    case 'auth/user-token-expired':
      console.log('User credential has expired.');
      break;
    case 'auth/web-storage-unsupported':
      console.log('Browser does not support web storage.');
      break;
    default:
      console.log('Unsupported error type', error);
      break;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User>(null);
  const [confirmation, setConfirmation] = useState(null);
  const [token, setToken] = useState<FirebaseAuthTypes.IdTokenResult>(null);

  useEffect(() => {
    const authSubscription = auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      const token = await user.getIdTokenResult(true);
      setToken(token);
      setUser(user);
    });
    return authSubscription;
  }, []);

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      const confirm = await auth().signInWithPhoneNumber(`+1${phoneNumber}`);
      setConfirmation(confirm);
    } catch (error) {
      handleFirebaseAuthenticationError(error.code);
    }
  };

  const verifyPhoneNumber = async (phoneNumber: string) => {
    const result = await auth().verifyPhoneNumber(phoneNumber, true);
    return result;
  };

  const confirmCode = async (code: string) => {
    try {
      const userData = await confirmation.confirm(code);
      setUser(userData);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-verification-code':
          console.log('Verification code is not valid');
          break;
        case 'auth/missing-verification-code':
          console.log('No validation code submitted.');
          break;
        default:
          console.log('Unsupported error', error);
          break;
      }
    }
  };

  const signOut = async () => {
    await auth().signOut();
    setUser(null);
  };

  const ProviderValues = { user, token, verifyPhoneNumber, signInWithPhoneNumber, confirmCode, signOut };
  return <AuthContext.Provider value={ProviderValues}>{children}</AuthContext.Provider>;
};

export const useAuthentication = () => useContext(AuthContext);
