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

const filePath = path.join(
  'src',
  'Module',
  moduleName,
  'types',
  `${fileName}.ts`,
);

let FileContainer = `
import { Nullable } from "@Module/core/types/core";

export interface ${fileName}Type {
  id: number;
  name: string;
}

export interface InitialValues {
  id: number;
  name: string;
}



export type ${fileName}InitialValuesType = Partial<Nullable<InitialValues>>;
`;

try {
  if (fs.existsSync(filePath)) {
    console.warn(`Warning: File ${filePath} already exists. Overwriting...`);
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, FileContainer);
  console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
} catch (error) {
  console.error(`Error generating file: ${error.message}`);
  process.exit(1);
}