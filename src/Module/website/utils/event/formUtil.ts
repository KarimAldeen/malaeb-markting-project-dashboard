

import {
  eventInitialValuesType,
  eventType,
} from '@Module/website/types/event';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<eventType>,
): eventInitialValuesType => {
  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
    price:objectToEdit.price??null,
    isActive:objectToEdit.isActive,
    maxUserCountRegistered:objectToEdit.maxUserCountRegistered??0
  };
};

export const getValidationSchema = (): Yup.Schema<eventInitialValuesType> => {
  return Yup.object().shape({
    name: Yup.string().required(),
    price:Yup.string().required(),
    maxUserCountRegistered:Yup.number().required()

  });
};

