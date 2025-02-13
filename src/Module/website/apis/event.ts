
import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useUpdateMutation,
} from '@Module/core/apis/helpers';

const API = {
  GET: '/dashboard/event',
  GET_ONE: '/dashboard/event/',
  ADD: '/dashboard/event',
  DELETE: '/dashboard/event',
  UPDATE: '/dashboard/event',
};

const KEY = "event";

export const useGetAllEvent = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET, params, options);
export const useGetEvent = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useAddEvent = () => useAddMutation(KEY, API.ADD);
export const useUpdateEvent = () => useUpdateMutation(KEY, API.ADD);
export const useDeleteEvent = () => useDeleteMutation(KEY, API.ADD);
