import fs from 'fs';
import path from 'path';

const moduleName = process.argv[3];
const fileName = process.argv[2];

// Ensure moduleName and fileName are provided

if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

if (!fileName) {
  console.error('Please provide a folder name.');
  process.exit(1);
}

// Define the path where the new file will be created
const folderPath = path.join(
  'src',
  'Module',
  moduleName,
  'components',
  fileName,
);
const filePath = path.join(folderPath, 'useTableColumns.tsx');

// Ensure the folder structure exists
fs.mkdirSync(folderPath, { recursive: true });

// Content for the TypeScript file
const FileContainer = `

import {
  ActionButton,
  ActionWrapper,
} from '@Module/core/imports/useColumns';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { ${fileName}Type } from '@Module/${moduleName}/types/${fileName}';
import { TableColumnsType } from 'antd';
import { createColumnsValues } from '@Module/core/utils/fn/createColumnsValues';
import ActionDeleteButton from '@Module/core/components/DataTable/ActionDeleteButton';
import { useDelete${capitalizeFirstLetter(fileName)} } from '@Module/${moduleName}/apis/${fileName}';

export const useColumns = () => { 
  const { setObjectToEdit } = useObjectToEdit();
  const { mutate } = useDelete${capitalizeFirstLetter(fileName)}();
  const handleDelete = (record: ${fileName}Type) => {
    setObjectToEdit(record);
    mutate({ id: record?.id });
  };
  const columnKeys: (keyof ${fileName}Type)[] = ['id', 'name'];
  const columnsValues = createColumnsValues<${fileName}Type>(columnKeys);

  const columns: TableColumnsType<${fileName}Type> = [
    ...columnsValues,
    {
      render: (_text, record, index) => {
        return (
          <ActionWrapper index={index}>
            <ActionDeleteButton action={() => handleDelete(record)} />
             <ActionButton  record={record} PageType='Page' navigateFor='Edit' /> 
          </ActionWrapper>
        );
      },
    },
  ];

  return columns;
};



`;

// Write the TypeScript content to the file
fs.writeFileSync(filePath, FileContainer);

console.log(
  `useTableColumns in module "${moduleName}" generated successfully.`,
);

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
