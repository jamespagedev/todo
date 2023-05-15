import {
  apiGetRequest,
  apiGetRequestGuest,
  apiPostRequest,
  apiDeleteRequest,
  apiPutRequest,
  apiLoginRequest,
} from './api';
import {
  paymentTypeSelections,
  paymentTypeForApi,
  checkoutModalTypes,
  checkoutPromptModalTypes,
  initialCheckoutModalData,
} from './checkouts';
import {currencyFormatter} from './currency';
import {
  getDayNameOfWeek,
  getDateStrMonDdAtTime,
  getStrDateFormatYyyyMmDdWithDashes,
  getStrTimeAmPmDateMmDdYyyy,
  getStrDateCurrentFormatFromStrDate,
  getDateThreeMonthsAgoAtTimeZeroAndStartDayOne,
  getDateSixMonthsAgoAtTimeZeroAndStartDayOne,
  getDateFirstDayOfYearAtTimeZero,
  getDateFirstDayOfApplicationAtTimeZero,
} from './dates';
import {getFormattedPhoneNumber, convertNumToStrWithCommasThreeDecimalTruncated} from './formNormalizedInputs';
import {copyByValue, isObjectEmpty, lowerCaseFirstLetter, isJsonString} from './helpers';
import {stateAbbreviations, defaultStoreHours, getLocationDistance} from './locations';
import {
  contactSupportModalTypes,
  paymentMethodsModalTypes,
  globalModalTypes,
  achAccountTypes,
  defaultAchAccount,
} from './modals';
import {
  unselectedDispensary,
  unselectedLocation,
  blankOrder,
  orderStatus,
  availableOrderFilterStatus,
  orderModalStatus,
  orderModalTypes,
  orderApiErrorResponses,
  apiOrderStatusWithChangeSubs,
  cartPromptModalTypes,
  initialOrderModalData,
  complianceProviderTypes,
  orderUpdatingStatuses,
  orderLimits,
  defaultOrderLimitsAsked,
  defaultOrdersFilterTimeline,
  getAvailableOrdersFilterTimeline,
} from './orders';
import {discountTypes, blankDiscounts, promoCodeModalTypes} from './discounts';
import {
  initialProductModalData,
  productTypes,
  getProductStock,
  getProductMedIdReqMsg,
  getUserAddCartUnavailableMsg,
  formatProductWeight,
  productModalTypes,
  productHasVariants,
  productHasOptions,
  isProductVariantOrOption,
  getSubNameFromProduct,
} from './products';
import {dispensariesPromptModalTypes, locationsPromptModalTypes} from './prompts';
import {
  SELECTED_DISPENSARY,
  SELECTED_LOCATION,
  AUTH_TOKEN,
  REFRESH_TOKEN,
  PROMPT_AGE,
  USER_INFO,
  USER_LATITUDE,
  USER_LONGITUDE,
  ORDER_LIMITS,
  ORDER,
  PAYMENT_TYPE,
  DISCOUNTS,
  getLocal,
  setLocal,
  getSession,
  setSession,
} from './storage';
import {mobileWidth, isBrowserMobile} from './styleDynamics';
import {backendServerUrl, FRONTEND_LINKS, BACKEND_API} from './urls';
import {guestUserProfile, hasBankAccount} from './user';

export {
  // api
  apiGetRequest,
  apiGetRequestGuest,
  apiPostRequest,
  apiDeleteRequest,
  apiPutRequest,
  apiLoginRequest,
  // checkout
  paymentTypeSelections,
  paymentTypeForApi,
  checkoutModalTypes,
  checkoutPromptModalTypes,
  initialCheckoutModalData,
  // currency
  currencyFormatter,
  // dates
  getDayNameOfWeek,
  getDateStrMonDdAtTime,
  getStrDateFormatYyyyMmDdWithDashes,
  getStrTimeAmPmDateMmDdYyyy,
  getStrDateCurrentFormatFromStrDate,
  getDateThreeMonthsAgoAtTimeZeroAndStartDayOne,
  getDateSixMonthsAgoAtTimeZeroAndStartDayOne,
  getDateFirstDayOfYearAtTimeZero,
  getDateFirstDayOfApplicationAtTimeZero,
  // formNormalizedInputs
  getFormattedPhoneNumber,
  convertNumToStrWithCommasThreeDecimalTruncated,
  // helpers
  copyByValue,
  isObjectEmpty,
  lowerCaseFirstLetter,
  isJsonString,
  // location
  stateAbbreviations,
  defaultStoreHours,
  getLocationDistance,
  // modals
  contactSupportModalTypes,
  paymentMethodsModalTypes,
  globalModalTypes,
  achAccountTypes,
  defaultAchAccount,
  // orders
  unselectedDispensary,
  unselectedLocation,
  blankOrder,
  orderModalTypes,
  orderApiErrorResponses,
  apiOrderStatusWithChangeSubs,
  cartPromptModalTypes,
  initialOrderModalData,
  orderStatus,
  availableOrderFilterStatus,
  orderModalStatus,
  complianceProviderTypes,
  orderUpdatingStatuses,
  orderLimits,
  defaultOrderLimitsAsked,
  defaultOrdersFilterTimeline,
  getAvailableOrdersFilterTimeline,
  // discounts
  discountTypes,
  blankDiscounts,
  promoCodeModalTypes,
  // products
  initialProductModalData,
  productTypes,
  getProductStock,
  getProductMedIdReqMsg,
  getUserAddCartUnavailableMsg,
  formatProductWeight,
  productModalTypes,
  productHasVariants,
  productHasOptions,
  isProductVariantOrOption,
  getSubNameFromProduct,
  // prompts
  dispensariesPromptModalTypes,
  locationsPromptModalTypes,
  // storage
  SELECTED_DISPENSARY,
  SELECTED_LOCATION,
  AUTH_TOKEN,
  REFRESH_TOKEN,
  PROMPT_AGE,
  USER_INFO,
  USER_LATITUDE,
  USER_LONGITUDE,
  ORDER_LIMITS,
  ORDER,
  PAYMENT_TYPE,
  DISCOUNTS,
  getLocal,
  setLocal,
  getSession,
  setSession,
  // styleDynamics
  mobileWidth,
  isBrowserMobile,
  // urls
  backendServerUrl,
  FRONTEND_LINKS,
  BACKEND_API,
  // user
  guestUserProfile,
  hasBankAccount,
};
