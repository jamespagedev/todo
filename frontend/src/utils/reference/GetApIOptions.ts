import {getLocal, AUTH_TOKEN} from './storage';

export interface ApiOptions {
  params?: any;
  data?: any;
  headers: {
    Accept: string;
    'Content-Type': string;
    Authorization?: string;
  };
}
const apiOptions: ApiOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};
const getAuthToken = () => {
  const storedToken: string = getLocal(AUTH_TOKEN);
  const sessionToken = new Promise((resolve, reject) => {
    resolve(storedToken);
    reject(new Error('your api token is down.'));
  });
  return sessionToken;
};
const getApiOptions = (isAuth: boolean): Promise<ApiOptions> => {
  const noAuthHeaderPromise: Promise<ApiOptions> = new Promise((resolve, reject): void => {
    resolve(apiOptions);
    reject(new Error('your api options are down.'));
  });
  if (isAuth) {
    return noAuthHeaderPromise;
  }
  return getAuthToken().then((token: any) => {
    if (token && token.length > 0) {
      apiOptions.headers.Authorization = `Bearer ${token}`;
    }
    return apiOptions;
  });
};

export default getApiOptions;
