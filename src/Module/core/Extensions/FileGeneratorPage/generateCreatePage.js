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
  getInitialValues,
  getValidationSchema,
} from '../../utils/${fileName}/formUtil';
import { useAdd${capitalizeFirstLetter(fileName)} } from '@Module/${moduleName}/apis/${fileName}';
import CreatePageBody from '@Module/core/components/page/PageBody';
import Form from '../../components/${fileName}/Form';
import { ${fileName}InitialValuesType } from '@Module/${moduleName}/types/${fileName}';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';


const CreatePage = () => {
  const { status,mutate } = useAdd${capitalizeFirstLetter(fileName)}();
  const handleSubmit = (values: ${fileName}InitialValuesType) => {
    console.log(values, 'values');
     mutate(values);
  };
 const {objectToEdit} = useObjectToEdit()
  return (
    <CreatePageBody
      onSubmit={handleSubmit}
      initialValues={getInitialValues(objectToEdit)}
      validationSchema={getValidationSchema}
      status={status}
    >
      <Form />
    </CreatePageBody>
  );
};

export default CreatePage;
`;

const filePath = `src/Module/${moduleName}/pages/${fileName}/CreatePage.tsx`;

const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
