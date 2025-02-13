

import {
  userInitialValuesType,
  userType,
} from '@Module/website/types/user';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<userType>,
): userInitialValuesType => {
  return {
    //@ts-ignore
    id: objectToEdit?.id ?? null,
    //@ts-ignore
    name: objectToEdit?.name ?? null,
  };
};

export const getValidationSchema = (): Yup.Schema<userInitialValuesType> => {
  return Yup.object().shape({
    name: Yup.string().required(),
  });
};

