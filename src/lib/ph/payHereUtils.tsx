// payHereUtils.ts - PayHere utility functions
import CryptoJS from 'crypto-js';
import type { PayHereConfig, PayHerePaymentData, CustomerDetails, OrderDetails } from './paymentTypes';

/**
 * Generate MD5 hash for PayHere payment
 * Hash = MD5(merchant_id + order_id + amount + currency + MD5(merchant_secret))
 */
export const generatePayHereHash = (
  merchantId: string,
  orderId: string,
  amount: number,
  currency: string,
  merchantSecret: string
): string => {
  const amountFormatted = parseFloat(amount.toString()).toFixed(2);
  const merchantSecretHash = CryptoJS.MD5(merchantSecret).toString().toUpperCase();
  const hashString = `${merchantId}${orderId}${amountFormatted}${currency}${merchantSecretHash}`;
  const hash = CryptoJS.MD5(hashString).toString().toUpperCase();
  return hash;
};

/**
 * Get PayHere checkout URL based on environment
 */
export const getPayHereCheckoutUrl = (isSandbox: boolean): string => {
  return isSandbox
    ? 'https://sandbox.payhere.lk/pay/checkout'
    : 'https://www.payhere.lk/pay/checkout';
};

/**
 * Generate unique order ID
 */
export const generateOrderId = (): string => {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Create PayHere payment data object
 */
export const createPayHerePaymentData = (
  config: PayHereConfig,
  orderDetails: OrderDetails,
  customerDetails: CustomerDetails
): PayHerePaymentData => {
  const hash = generatePayHereHash(
    config.merchantId,
    orderDetails.orderId,
    orderDetails.amount,
    orderDetails.currency,
    config.merchantSecret
  );

  return {
    merchant_id: config.merchantId,
    return_url: `${window.location.origin}/payment-success`,
    cancel_url: `${window.location.origin}/payment-cancel`,
    notify_url: ``, // Your backend webhook
    order_id: orderDetails.orderId,
    items: orderDetails.items,
    currency: orderDetails.currency,
    amount: orderDetails.amount,
    first_name: customerDetails.firstName,
    last_name: customerDetails.lastName,
    email: customerDetails.email,
    phone: customerDetails.phone,
    address: customerDetails.address,
    city: customerDetails.city,
    country: customerDetails.country,
    hash: hash,
  };
};

/**
 * Submit payment to PayHere
 */
export const submitPayHerePayment = (paymentData: PayHerePaymentData, isSandbox: boolean): void => {
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = getPayHereCheckoutUrl(isSandbox);

  // Add all payment data as hidden inputs
  Object.entries(paymentData).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value.toString();
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};
