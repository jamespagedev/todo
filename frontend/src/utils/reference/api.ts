import axios from 'axios';
import getApiOptions, {ApiOptions} from './GetApIOptions';
import {backendServerUrl} from './urls';
const config = {
  baseURL: backendServerUrl,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
};
const requestInstance = axios.create(config);

export const apiGetRequest = ([url, data]: any) =>
  getApiOptions(false).then((options: ApiOptions) => {
    options.params = data;
    return requestInstance.get(url, options);
  });

export const apiGetRequestGuest = ([url, data]: any) =>
  getApiOptions(true).then((options: ApiOptions) => {
    options.params = data;
    return requestInstance.get(url, options);
  });

export const apiPostRequest = ([url, data]: any) =>
  getApiOptions(false).then((options: ApiOptions) => {
    options.params = {};
    return requestInstance.post(url, data, options);
  });

export const apiDeleteRequest = ([url, data]: any) =>
  getApiOptions(false).then((options: ApiOptions) => {
    options.data = data;
    options.params = {};
    return requestInstance.delete(url, options);
  });

export const apiPutRequest = ([url, data]: any) =>
  getApiOptions(false).then((options: ApiOptions) => {
    return requestInstance.put(url, data, options);
  });

export const apiLoginRequest = ([url, params]: any) => {
  return getApiOptions(true).then((options: any) => {
    return requestInstance.post(url, params, options);
  });
};

requestInstance.interceptors.request.use(async (request) => {
  return request;
});
