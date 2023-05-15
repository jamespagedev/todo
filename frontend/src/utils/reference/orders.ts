import {
  IorderModal,
  IorderUpdatingStatuses,
  Iorder,
  Ilocation,
  IorderModalLimits,
  IorderLimitsAsked,
  IordersFilterStatus,
  IordersFilterTimeline,
} from 'src/types/Orders';
import {
  getDateThreeMonthsAgoAtTimeZeroAndStartDayOne,
  getDateSixMonthsAgoAtTimeZeroAndStartDayOne,
  getDateFirstDayOfYearAtTimeZero,
  getDateFirstDayOfApplicationAtTimeZero,
} from 'src/utils/dates';
import {paymentTypeSelections} from 'src/utils/checkouts';
import {copyByValue} from './helpers';

export const complianceProviderTypes: {[key: string]: string} = {
  default: '',
  BiotrackIntegration: 'BiotrackIntegration',
  MetrcIntegration: 'MetrcIntegration',
};

export const unselectedDispensary = {
  merchantId: 0,
  merchantName: '',
  profilePicture: '',
  logo: null,
};

export const unselectedLocation: Ilocation = {
  city: '',
  country: '',
  complianceProvider: complianceProviderTypes.default,
  id: 0,
  latitude: 0,
  limits: {
    recreationalLimit: null,
    medicalLimit: null,
    concentrateLimit: null,
  },
  longitude: 0,
  phoneNumber: '',
  searchRadius: 0,
  state: '',
  storeHours: '',
  storeId: '',
  streetAddress: '',
  suite: '',
  zipCode: '',
};

export const blankOrder: Iorder = {
  products: [],
  productIdsToIndex: {},
  requiresMedId: false,
  useableCartWeight: 0,
  useableConcentrateCartWeight: 0,
  isDigitalPaymentsAllowed: false,
  remainingDigitalPaymentLimit: 0,
  discountTotal: 0,
  discounts: [],
  loyaltyBalance: {
    id: 0,
    balance: 0,
    loyaltyPointsToUse: 0,
    merchantLogo: '',
    merchantName: '',
    merchantProfilePicture: '',
    isLoyaltyApplied: false,
  },
  estimatedTotal: {
    subTotal: 0,
    taxesTotal: 0,
    taxes: [],
    costsTotal: 0,
    costs: {
      total: {
        name: 'Costs:',
        amount: 0,
      },
      repAndCompCost: {
        name: 'Reporting and Compliance Cost',
        amount: 0,
      },
    },
    grandTotal: 0,
    balanceRemainingWithLoyalty: 0,
    balanceRemainingWithoutLoyalty: 0,
  },
};

export const orderStatus: {[key: string]: {text: string; className: string}} = {
  pending: {text: 'Pending', className: 'span-waiting'},
  readyForPickup: {text: 'Ready for Pickup', className: 'span-ready'},
  accepted: {text: 'Complete', className: 'span-complete'},
  merchantAdjustedOrder: {text: '(Requires Attention) *Not Fully Filled', className: 'span-error'},
  customerAdjustedOrder: {text: 'Pending', className: 'span-waiting'},
  canceledByPatient: {text: 'Canceled by You', className: 'span-error'},
  canceledByDispensary: {text: 'Canceled by Dispensary', className: 'span-error'},
};

export const availableOrderFilterStatus: Array<IordersFilterStatus> = [
  {selectedOrderStatusIndex: 0, hashKeys: new Set(['none']), text: 'Status'},
  {
    selectedOrderStatusIndex: 1,
    hashKeys: new Set(['pending', 'customerAdjustedOrder']),
    text:
      orderStatus['pending'].text === orderStatus['customerAdjustedOrder'].text
        ? orderStatus['pending'].text
        : 'Pending',
  },
  {selectedOrderStatusIndex: 2, hashKeys: new Set(['readyForPickup']), text: orderStatus['readyForPickup'].text},
  {selectedOrderStatusIndex: 3, hashKeys: new Set(['accepted']), text: orderStatus['accepted'].text},
  {
    selectedOrderStatusIndex: 4,
    hashKeys: new Set(['merchantAdjustedOrder']),
    text: orderStatus['merchantAdjustedOrder'].text,
  },
  {selectedOrderStatusIndex: 5, hashKeys: new Set(['canceledByPatient']), text: orderStatus['canceledByPatient'].text},
  {
    selectedOrderStatusIndex: 6,
    hashKeys: new Set(['canceledByDispensary']),
    text: orderStatus['canceledByDispensary'].text,
  },
];

export const orderModalStatus: {[key: string]: {text: string; className: string}} = {
  pending: {text: orderStatus['pending'].text, className: 'span-waiting'},
  readyForPickup: {text: orderStatus['readyForPickup'].text, className: 'span-ready'},
  accepted: {text: orderStatus['accepted'].text, className: 'span-complete'},
  merchantAdjustedOrder: {text: orderStatus['merchantAdjustedOrder'].text, className: 'span-error'},
  customerAdjustedOrder: {text: orderStatus['customerAdjustedOrder'].text, className: 'span-waiting'},
  canceledByPatient: {text: orderStatus['canceledByPatient'].text, className: 'span-error'},
  canceledByDispensary: {text: orderStatus['canceledByDispensary'].text, className: 'span-error'},
};

export const orderModalTypes: {[key: string]: number} = {
  none: 0,
  isSendingApi: 1,
  isApiSendComplete: 2,
  isApiSendFailed: 3,
  pending: 4,
  readyForPickup: 5,
  accepted: 6,
  merchantAdjustedOrder: 7,
  customerAdjustedOrder: 4,
  canceledByPatient: 8,
  canceledByDispensary: 9,
  confirmSubstitutions: 10,
  isOrderCancelled: 11,
};

export const orderApiErrorResponses: {[key: string]: string} = {
  requiresMedId: 'MEDICAL_ID_REQUIRED',
  medicalLimit: 'EXCEEDS_MEDICAL_LIMIT',
  concentratedLimit: 'EXCEEDS_CONCENTRATE_LIMIT',
};

export const apiOrderStatusWithChangeSubs: Set<string> = new Set(['merchantAdjustedOrder']);

export const cartPromptModalTypes: {[key: string]: string} = {
  requiresMedId: 'CART_REQUIRES_MED_ID',
  recreationalLimit: 'CART_OVER_RECREATIONAL_LIMIT',
  recreationalLimitAndMedIdRequired: 'CART_OVER_RECREATIONAL_LIMIT_AND_MED_ID_REQUIRED',
  medicalLimit: 'CART_OVER_MEDICAL_LIMIT',
  concentratedLimit: 'CART_OVER_CONCENTRATED_LIMIT',
};

export const initialOrderModalData: IorderModal = {
  id: 0,
  userPic: '',
  userName: '',
  status: '',
  origCreated: '',
  formattedCreated: '',
  paymentType: paymentTypeSelections.payInStore,
  profilePicture: '',
  logo: '',
  receipt: '',
  itemCount: 0,
  origOrdersIndex: 0,
  displayedOrdersIndex: 0,
  discountTotal: 0,
  discounts: [],
  dispensary: {
    id: 0,
    name: '',
  },
  location: {
    id: 0,
    name: '',
    street: '',
    city: '',
    state: '',
    hours: {
      monday: {open: '', close: ''},
      tuesday: {open: '', close: ''},
      wednesday: {open: '', close: ''},
      thursday: {open: '', close: ''},
      friday: {open: '', close: ''},
      saturday: {open: '', close: ''},
      sunday: {open: '', close: ''},
    },
    distance: '',
  },
  listProducts: [],
  products: {
    hasSubstitutions: false,
    numOfAcceptedSubstitions: 0,
    numOfRejectedSubstitions: 0,
    allProducts: [],
    fulfilledItems: [],
    unfulfilledItems: [],
    substitutions: [],
  },
  estimatedTotal: {
    subTotal: 0,
    taxesTotal: 0,
    taxes: [],
    costs: {
      total: {
        name: 'Costs:',
        amount: 0,
      },
      repAndCompCost: {
        name: 'Reporting and Compliance Cost',
        amount: 0,
      },
      cashHandlingCosts: {
        name: 'Cash Handling Cost',
        detail: 'Calculated at time for payment*',
        amount: 0,
      },
    },
    grandTotal: 0,
  },
};

export const orderUpdatingStatuses: IorderUpdatingStatuses = {
  none: 0,
  isBehindDebouncer: 1,
  isCallingApi: 2,
};

export const orderLimits: IorderModalLimits = {
  recreationalLimit: '28.5g',
  medicalLimit: '226.8g',
  concentrateLimit: '8g',
};

export const defaultOrderLimitsAsked: IorderLimitsAsked = {
  recreationalLimit: false,
  medicalLimit: false,
  concentrateLimit: false,
};

export const defaultOrdersFilterTimeline: IordersFilterTimeline = {
  selectedTimelineIndex: 0,
  hashKey: 'none',
  text: 'All',
  startDate: null,
  endDate: null,
};

export function getAvailableOrdersFilterTimeline() {
  const todaysDate = new Date();
  const availableTimelines: Array<IordersFilterTimeline> = [copyByValue(defaultOrdersFilterTimeline)];
  let selectedTimelineIndex: number = availableTimelines[0].selectedTimelineIndex;

  availableTimelines.push({
    selectedTimelineIndex: ++selectedTimelineIndex,
    hashKey: 'threeMonths',
    text: '3 Months',
    startDate: getDateThreeMonthsAgoAtTimeZeroAndStartDayOne(),
    endDate: todaysDate,
  });
  availableTimelines.push({
    selectedTimelineIndex: ++selectedTimelineIndex,
    hashKey: 'sixMonths',
    text: '6 Months',
    startDate: getDateSixMonthsAgoAtTimeZeroAndStartDayOne(),
    endDate: todaysDate,
  });
  availableTimelines.push({
    selectedTimelineIndex: ++selectedTimelineIndex,
    hashKey: 'thisYear',
    text: 'This Year',
    startDate: getDateFirstDayOfYearAtTimeZero(),
    endDate: todaysDate,
  });
  const appStartYear = getDateFirstDayOfApplicationAtTimeZero().getFullYear();
  for (let year = todaysDate.getFullYear() - 1; year >= appStartYear; year--) {
    const yearStartDate = new Date(year, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    const yearEndDate = new Date(year, 11, 31);
    yearEndDate.setHours(0, 0, 0, 0);
    availableTimelines.push({
      selectedTimelineIndex: ++selectedTimelineIndex,
      hashKey: year.toString(),
      text: year.toString(),
      startDate: yearStartDate,
      endDate: yearEndDate,
    });
  }
  return availableTimelines;
}
