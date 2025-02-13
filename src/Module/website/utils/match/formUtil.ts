

import {
  matchInitialValuesType,
  matchType,
} from '@Module/website/types/match';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<matchType>,
): matchInitialValuesType => {
  return {
    id: objectToEdit?.id ?? null,
    secondTeamName: objectToEdit?.secondTeamName ?? null,
    firstTeamName:objectToEdit?.firstTeamName ?? null,
    eventId:objectToEdit?.eventId ?? null ,
    firstTeamImage:objectToEdit?.firstTeamImage ?? null,
    secondTeamImage:objectToEdit?.secondTeamImage ?? null
  };
};

export const getValidationSchema = (): Yup.Schema<matchInitialValuesType> => {
  return Yup.object().shape({
    secondTeamName: Yup.string().required(),
    firstTeamName: Yup.string().required(),
    eventId: Yup.number().required(),
    secondTeamImage:Yup.mixed().required() ,
    firstTeamImage:Yup.mixed().required() 

  });
};

