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

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let FileContainer = `

import {
  ${fileName}InitialValuesType,
  ${fileName}Type,
} from '@Module/${moduleName}/types/${fileName}';
import * as Yup from 'yup';

export const getInitialValues = (
  objectToEdit: Partial<${fileName}Type>,
): ${fileName}InitialValuesType => {
  return {
    id: objectToEdit?.id ?? null,
    name: objectToEdit?.name ?? null,
  };
};

export const getValidationSchema = (): Yup.Schema<${fileName}InitialValuesType> => {
  return Yup.object().shape({
    name: Yup.string().required(),
  });
};

`;

const filePath = `src/Module/${moduleName}/utils/${fileName}/formUtil.ts`;

// Create the directories if they don't exist
const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
