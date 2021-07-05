import { createContext, useContext } from 'react';
import { usePaymentStatus, paymentMethods } from './usePaymentStatus';

const StoreModuleContext = createContext({
  isPaymentEnabled: false,
  setPaymentStatus: () => {},
  paymentMethod: paymentMethods.DIRECT_LINK,
});

export const useStoreModuleContext = () => useContext(StoreModuleContext);

export default function StoreModuleProvider({ children, isPaymentEnabled }) {
  const paymentStatus = usePaymentStatus(isPaymentEnabled);

  return (
    <StoreModuleContext.Provider value={{
      ...paymentStatus
    }}>
      {children}
    </StoreModuleContext.Provider>
  );
}
