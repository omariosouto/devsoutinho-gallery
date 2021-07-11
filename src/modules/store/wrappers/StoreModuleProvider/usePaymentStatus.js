import { useState } from "react";

const STRIPE = "stripe";
const DIRECT_LINK = "directLink";

export const paymentMethods = {
  STRIPE,
  DIRECT_LINK,
};

export function usePaymentStatus(paymentStatusInitialState = false) {
  const [isPaymentEnabled, setPaymentStatus] = useState(
    paymentStatusInitialState
  );

  return {
    isPaymentEnabled,
    setPaymentStatus,
    paymentMethod: isPaymentEnabled ? STRIPE : DIRECT_LINK,
  };
}
