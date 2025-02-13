import fs from 'fs';
import path from 'path';

const moduleName = process.argv[3];
const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

const folderPath = path.join('src', 'Module', moduleName, 'apis');
const filePath = path.join(folderPath, `${fileName}.ts`);

// Ensure the folder structure exists
fs.mkdirSync(folderPath, { recursive: true });

let FileContainer = `
import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useGetQueryPagination,
  useUpdateMutation,
} from '@Module/core/apis/helpers';

const API = {
  GET: '/${fileName}',
  GET_ONE: '/${fileName}/',
  ADD: '/${fileName}',
  DELETE: '/${fileName}',
  UPDATE: '/${fileName}',
};

const KEY = "${fileName}";

export const useGetAll${capitalizeFirstLetter(fileName)} = (params:Record<string, any> = {}, options: any = {}) => useGetQueryPagination(KEY, API.GET, params, options);
export const useGet${capitalizeFirstLetter(fileName)} = (params:Record<string, any> = {}, options: any = {}) => useGetQuery(KEY, API.GET_ONE + params.id, params, options);
export const useAdd${capitalizeFirstLetter(fileName)} = () => useAddMutation(KEY, API.ADD);
export const useUpdate${capitalizeFirstLetter(fileName)} = () => useUpdateMutation(KEY, API.ADD);
export const useDelete${capitalizeFirstLetter(fileName)} = () => useDeleteMutation(KEY, API.ADD);
`;

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
