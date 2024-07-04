import {TReservation, TReservationResponse} from '../types';
import HttpService from './HttpService';

const addReservation = async (body: TReservation) => {
  const res = await HttpService.postRequest<any>(`/reservation`, body);
  return res;
};

const updateReservation = async (body: TReservationResponse) => {
  const res = await HttpService.putRequest<any>(
    `/reservation/${body.id}`,
    body,
  );
  return res;
};

const getReservation = async (): Promise<TReservationResponse[]> => {
  const {data} = await HttpService.getRequest<any>(`/reservation`);
  return data;
};

const deleteReservation = async (id: number) => {
  const {data} = await HttpService.deleteRequest<any>(`/reservation/${id}`);
  return data;
};

// const passwordResetRequest = async ({email}) => {
//   return api
//     .post('/user/password-reset-request', {
//       email,
//     })
//     .then(response => response.data);
// };

export {addReservation, updateReservation, getReservation, deleteReservation};
