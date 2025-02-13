
import {
  useDeleteMutation,
  useGetQuery,
  useUpdateMutation,
  useAddFormMutation
} from '@Module/core/apis/helpers';

const API = {
  GET: '/match',
  GET_ONE: '/match/',
  ADD: '/match',
  DELETE: '/match',
  UPDATE: '/match',
};

const KEY = "match";

export const useGetAllMatch = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET, params, options);
export const useGetMatch = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useAddMatch = () => useAddFormMutation(KEY, API.ADD);
export const useUpdateMatch = () => useUpdateMutation(KEY, API.ADD);
export const useDeleteMatch = () => useDeleteMutation(KEY, API.ADD);
