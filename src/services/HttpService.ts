import {Alert} from 'react-native';
import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';

const source = axios.CancelToken.source();
const client = axios.create({
  cancelToken: source.token,
  baseURL:'https://7d01-176-234-134-60.ngrok-free.app'
});

const beginRequest = async <T = any>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client(config);
    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  }
};

const getRequest = async <T = any>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.get<T>(url, options);
    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  }
};

const postRequest = async <T = any>(
  url: string,
  body: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.post<T>(url, body, options);
    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  }
};

const putRequest = async <T = any>(
  url: string,
  body: any,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.put<T>(url, body, options);
    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  }
};

const deleteRequest = async <T = any>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.delete<T>(url, options);
    return response;
  } catch (error) {
    handleError(error as AxiosError);
    throw error;
  }
};

const cancelRequest = (): void => {
  source.cancel('Kullanıcı isteği iptal etti');
};

const handleError = (error: AxiosError): void => {
  const message = error.message;

  if (axios.isCancel(error)) {
    console.error('Cancelled', message);
  } else {
    Alert.alert('Error', message);
  }
};

const HttpService = {
  beginRequest,
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  cancelRequest,
};

export default HttpService;
