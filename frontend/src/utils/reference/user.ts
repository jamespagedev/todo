import {IuserProfile} from 'src/types/Auth';

export const guestUserProfile: IuserProfile = {
  accountVerificationNeeded: false,
  badgeCount: 0,
  balance: 0,
  birthdate: '',
  defaultPrivacySetting: 'Public',
  email: '',
  firstName: 'Guest',
  id: 0,
  initials: 'G',
  isFavorited: false,
  jumioId: '',
  lastName: '',
  medicalIdExpiration: '',
  medicalIdFrontImage: '',
  medicalIdNumber: '',
  paymentsEnabled: false,
  phoneNumberVerified: false,
  profilePicture: '',
  ssnVerified: false,
  userBadges: [],
  username: 'Guest',
  workflowId: null,
};

export const hasBankAccount = (user: any) => {
  return user.paymentOptions.length > 0;
};
