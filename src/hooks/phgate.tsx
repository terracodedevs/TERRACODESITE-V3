// usePayHere.ts - Custom hook for PayHere payments
import { useState } from 'react';
import {
  createPayHerePaymentData,
  submitPayHerePayment,
  generateOrderId
} from './payHereUtils';
import type { PayHereConfig, CustomerDetails, OrderDetails } from './paymentTypes';

interface UsePayHereReturn {
  initiatePayment: (orderDetails: Omit<OrderDetails, 'orderId'>, customerDetails: CustomerDetails) => void;
  isProcessing: boolean;
  error: string | null;
}

export const usePayHere = (config?: Partial<PayHereConfig>): UsePayHereReturn => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // PayHere configuration with defaults
  const payHereConfig: PayHereConfig = {
    merchantId: "1233230",
    merchantSecret: "MTIyOTU5OTMxMTY4ODkwOTk5NzE3NzQ1ODA0MTQxNjgyMzY4OTA5",
    isSandbox: true,
  };

  const initiatePayment = (
    orderDetails: Omit<OrderDetails, 'orderId'>,
    customerDetails: CustomerDetails
  ): void => {
    try {
      setIsProcessing(true);
      setError(null);

      // Validate configuration
      if (!payHereConfig.merchantId || !payHereConfig.merchantSecret) {
        throw new Error('PayHere merchant credentials not configured');
      }

      // Generate unique order ID
      const orderId = generateOrderId();

      // Create complete order details
      const completeOrderDetails: OrderDetails = {
        ...orderDetails,
        orderId,
      };

      // Create payment data with hash
      const paymentData = createPayHerePaymentData(
        payHereConfig,
        completeOrderDetails,
        customerDetails
      );

      // Store order ID in localStorage for success page
      localStorage.setItem('lastOrderId', orderId);
      localStorage.setItem('lastOrderAmount', orderDetails.amount.toString());
      localStorage.setItem('lastOrderItems', orderDetails.items);

      // Submit to PayHere (will redirect)
      submitPayHerePayment(paymentData, payHereConfig.isSandbox);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initiate payment';
      setError(errorMessage);
      setIsProcessing(false);
      console.error('Payment error:', err);
    }
  };

  return {
    initiatePayment,
    isProcessing,
    error,
  };
};
