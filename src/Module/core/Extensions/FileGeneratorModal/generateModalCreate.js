import fs from 'fs';
import path from 'path';

const moduleName = process.argv[3];
const fileName = process.argv[2];



if (!fileName) {
  console.error('Please provide a file name.');
}

if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

let FileContainer = `
import LayoutModal from '@Module/core/design-system/LayoutModal'
import React from 'react'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/${moduleName}/utils/${fileName}/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { ${fileName}InitialValuesType } from '@Module/${moduleName}/types/${fileName}';
import { useAdd${capitalizeFirstLetter(fileName)} } from '@Module/${moduleName}/apis/${fileName}';

function CreateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useAdd${capitalizeFirstLetter(fileName)}();
  const handleSubmit = (values: ${fileName}InitialValuesType) => {
      console.log(values, 'values');
      mutate(values);
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Add ${fileName}'
    status={status}
    >
        <Form/>
    </LayoutModal>
  )
}

export default CreateModal
`;

const filePath = `src/Module/${moduleName}/components/${fileName}/CreateModal.tsx`;

// Create the directories if they don't exist
const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}