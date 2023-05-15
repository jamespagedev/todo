import {IpaymentTypeSelection} from 'src/types/Orders';

export const paymentTypeSelections: {[key: string]: IpaymentTypeSelection} = {
  unselected: {name: '', type: 0},
  artisDigitalPayment: {name: 'Artis Digital Payment', type: 1},
  payInStore: {name: 'Pay In Store', type: 2},
};

export const paymentTypeForApi: {[key: number]: boolean} = {
  0: false,
  1: true,
  2: false,
};

export const checkoutModalTypes = {
  none: 0,
  isSendingApi: 1,
  isApiSendComplete: 2,
  isApiSendFailed: 3,
  main: 4,
  loyaltyRewards: 5,
};

export const checkoutPromptModalTypes: {[key: string]: string} = {
  removeDiscount: 'CHECKOUT_REMOVE_DISCOUNT',
  removeDiscountBeforeNewOrder: 'CHECKOUT_REMOVE_DISCOUNT_BEFORE_NEW_ORDER',
  requiresMedId: 'CHECKOUT_REQUIRES_MED_ID',
  recreationalLimit: 'CHECKOUT_OVER_RECREATIONAL_LIMIT',
  recreationalLimitAndMedIdRequired: 'CHECKOUT_OVER_RECREATIONAL_LIMIT_AND_MED_ID_REQUIRED',
  medicalLimit: 'CHECKOUT_OVER_MEDICAL_LIMIT',
  concentratedLimit: 'CHECKOUT_OVER_CONCENTRATED_LIMIT',
};

export const initialCheckoutModalData = {
  selectedDispensary: false,
  selectedLocation: false,
  products: false,
  totals: false,
  paymentType: false,
};
