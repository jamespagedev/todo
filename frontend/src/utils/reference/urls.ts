/* ToDo: once testing is complete, discuss server handling
export const backendServerUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_API
    : process.env.NODE_ENV === 'test'
    ? process.env.REACT_APP_TEST_API
    : process.env.REACT_APP_PROD_API; // prod
*/
export const backendServerUrl = 'https://artis-app-client-development.azurewebsites.net/api'; // replacing backendServerUrl(above)

export const FRONTEND_LINKS = {
  landing: '/',
  dispensaries: '/dispensaries',
  locations: '/locations',
  checkout: '/checkout',
  discounts: '/discounts',
  orders: '/orders',
  products: '/products',
  signin: '/signin',
};

export const BACKEND_API = {
  ach: '/settings/ach',
  deletePayment: '/delete_payment',
  favorites: '/favorites',
  getOtherPayments: '/get_other_payments',
  inviteFriend: '/invite',
  login: '/login',
  merchantFeed: '/merchant_feed',
  merchantLocation: '/merchant_location',
  merchantLocations: '/merchant_locations',
  merchantProfile: '/merchant_profile',
  onlineCart: '/online/cart',
  onlineCartDiscounts: '/online/cart/discounts',
  onlineOrder: '/online/order',
  onlineOrders: '/online/orders',
  onlineProducts: '/online/products',
  userLimits: '/online/limits',
};
