import React, { createContext, FC, ReactNode, useContext } from 'react';
import { useAuthentication } from '../authentication';
import { useFirestoreDocument } from '../firebase/firebase';

type PaymentContextType = {
  balance?: number;
  payWithApple: (amount: number) => Promise<string>;
};

const PaymentContext = createContext<PaymentContextType>({} as PaymentContextType);
export const SUCCESSFUL_PAYMENT = 'SUCCESSFUL_PAYMENT';

export const PaymentProvider: FC = ({ children }: { children?: ReactNode }) => {
  const { user } = useAuthentication();
  const { uid } = user || {};
  const { data: userProfile, updateRecord: updateProfile } = useFirestoreDocument(['users', uid]);
  const { balance } = userProfile || {};

  const payWithApple = async (amount: number) => {
    await updateProfile({
      balance: `${Number(balance) + Number(amount)}`,
    });
    return SUCCESSFUL_PAYMENT;
  };
  return <PaymentContext.Provider value={{ balance, payWithApple }}>{children}</PaymentContext.Provider>;
};

export const usePaymentContext = () => useContext(PaymentContext);
