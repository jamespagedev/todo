// local storage keys
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const PROMPT_AGE = 'PROMPT_AGE';
export const USER_INFO = 'USER_INFO';
export const USER_LATITUDE = 'USER_LATITUDE';
export const USER_LONGITUDE = 'USER_LONGITUDE';
export const SELECTED_DISPENSARY = 'SELECTED_DISPENSARY';
export const SELECTED_LOCATION = 'SELECTED_LOCATION';
export const ORDER_LIMITS = 'ORDER_LIMITS';
export const ORDER = 'ORDER';
export const PAYMENT_TYPE = 'PAYMENT_TYPE';
export const DISCOUNTS = 'DISCOUNTS';

export const getLocal = (key: string) => {
  const sessionData = localStorage.getItem(key);
  try {
    if (typeof sessionData !== 'string') {
      return sessionData; // null
    }
    const value = JSON.parse(sessionData);
    return typeof value === 'object' && typeof value.value !== 'undefined' ? value.value : value;
  } catch (ex) {
    return sessionData;
  }
};
export const setLocal = (key: string, value: any) => {
  let val = value;
  if (typeof value === 'object') {
    val = JSON.stringify(value);
  }
  if (value !== undefined && value !== null) {
    localStorage.setItem(key, val);
    return;
  }
};

export const getSession = (key: string) => {
  const sessionData = sessionStorage.getItem(key);
  try {
    if (typeof sessionData !== 'string') {
      return sessionData; // null
    }
    const value = JSON.parse(sessionData);
    return typeof value === 'object' && typeof value.value !== 'undefined' ? value.value : value;
  } catch (ex) {
    return sessionData;
  }
};
export const setSession = (key: string, value: any) => {
  let val = value;
  if (typeof value === 'object') {
    val = JSON.stringify(value);
  }
  if (value !== undefined && value !== null) {
    sessionStorage.setItem(key, val);
    return;
  }
};
