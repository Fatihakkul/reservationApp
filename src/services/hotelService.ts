import { THotel } from '../types';
import HttpService from './HttpService';

const getHotels = async (): Promise<THotel[]> => {
  const {data} = await HttpService.getRequest<any>(`/hotels`);
  return data;
};

// const passwordResetRequest = async ({email}) => {
//   return api
//     .post('/user/password-reset-request', {
//       email,
//     })
//     .then(response => response.data);
// };

export {getHotels};
