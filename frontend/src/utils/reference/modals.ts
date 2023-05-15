export const contactSupportModalTypes = {
  isSendingApi: 1,
  isApiSendComplete: 2,
  isApiSendFailed: 3,
  main: 4,
};

export const paymentMethodsModalTypes = {
  isSendingApi: 1,
  isApiSendComplete: 2,
  isApiSendFailed: 3,
  main: 4,
  paymentMethod: 5,
};

export const globalModalTypes = {
  none: 'none',
  isSendingApi: 'isSendingApi',
  isApiSendComplete: 'isApiSendComplete',
  isApiSendFailed: 'isApiSendFailed',
  confirmOrCancel: 'confirmOrCancel',
  confirm: 'confirm',
};

export const achAccountTypes = {
  checking: 'Checking',
  savings: 'Savings',
};

export const defaultAchAccount = {
  routingNumber: '',
  accountNumber: '',
  accountType: achAccountTypes.checking,
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
};
