import { useAddMutation } from '@Module/core/apis/helpers';

const KEY = 'LOGIN';
const API = {
  login: '/admin/login',
};
export const useLoginAdmin = <ILogin>() =>
  useAddMutation<ILogin>(KEY, API.login);
