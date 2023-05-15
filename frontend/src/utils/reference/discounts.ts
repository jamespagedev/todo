import {Idiscounts, Idiscount} from 'src/types/Discounts';

export const discountTypes = {
  none: '',
  promotion: 'Promotion',
  loyalty: 'Loyalty',
  promotionCode: 'Promotion Code',
};

export const blankSelectedDiscount: Idiscount = {
  id: 0,
  code: '',
  name: '',
  description: '',
  image: '',
  type: '',
  expirationDate: new Date(),
};

export const blankDiscounts: Idiscounts = {
  promotions: [],
  loyalties: [],
  selected: {
    id: 0,
    code: '',
    name: '',
    description: '',
    image: '',
    type: '',
    expirationDate: new Date(),
  },
};

export const promoCodeModalTypes: {[key: string]: number} = {
  none: 0,
  isApiSendComplete: 1,
  isApiSendFailed: 2,
  main: 3,
};
