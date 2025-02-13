
import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useGetQueryPagination,
  useUpdateMutation,
} from '@Module/core/apis/helpers';

const API = {
  GET: '/admin/users',
  GET_ONE: '/admin/users/',
  ADD: '/admin/users',
  DELETE: '/admin/users',
  UPDATE: '/admin/users',
};

const KEY = "user";

export const useGetAllUser = (params:Record<string, any> = {}, options: any = {}) => useGetQueryPagination(KEY, API.GET, params, options);
export const useGetUser = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useAddUser = () => useAddMutation(KEY, API.ADD);
export const useUpdateUser = () => useUpdateMutation(KEY, API.ADD);
export const useDeleteUser = () => useDeleteMutation(KEY, API.ADD);
