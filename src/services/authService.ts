import {TUser} from '../types';
import HttpService from './HttpService';

const login = async ({nickname, password}: TUser) => {
  const {data} = await HttpService.getRequest<TUser[] | undefined>(
    `/user?nickname=${nickname}`,
  );

  if (data && data?.length > 0) {
    const user = data.find(user => user.password === password);
    if (user) return user;
    else throw {message: 'Kullanıcı adı veya şifreniz yanlış'};
  }
  throw {message: 'Kullanıcı bulunamadı', status: 404};
};

const register = async (user: TUser) => {
  const res = await HttpService.postRequest<any>(`/user`, user);
  return res;
};

// const passwordResetRequest = async ({email}) => {
//   return api
//     .post('/user/password-reset-request', {
//       email,
//     })
//     .then(response => response.data);
// };

export {login, register};
