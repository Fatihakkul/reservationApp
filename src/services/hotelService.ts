import { THotel } from '../types';
import HttpService from './HttpService';

const getHotels = async (): Promise<THotel[]> => {
  const {data} = await HttpService.getRequest<any>(`/hotels`);
  return data;
};

export {getHotels};
