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
import { useUpdate${capitalizeFirstLetter(fileName)} } from '@Module/${moduleName}/apis/${fileName}';
import UpdatePageBody from '@Module/core/components/page/PageBody';
import Form from '../../components/${fileName}/Form';
import { ${fileName}Type ,  ${fileName}InitialValuesType} from '@Module/${moduleName}/types/${fileName}';
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { DeleteKeysFromObject } from '@Module/core/utils/object/DeleteKeysFromObject';

const UpdatePage = () => {
  const { status,mutate } = useUpdate${capitalizeFirstLetter(fileName)}();
    const {objectToEdit} = useObjectToEdit()

  const handleSubmit = (values: ${fileName}InitialValuesType) => {
    console.log(values, 'values');

     const mutateData = DeleteKeysFromObject({
      values,
      deleteKeys: [{ key: 'image', type: 'string' }],
    });
     mutate(
      {
        id: mutateData?.id , 
        newData:{_method:"PUT",...mutateData}
      }
    );

  };

  return (
    <UpdatePageBody
      onSubmit={handleSubmit}
      initialValues={getInitialValues(objectToEdit)}
      validationSchema={getValidationSchema}
      status={status}
    >
      <Form />
    </UpdatePageBody>
  );
};

export default UpdatePage;
`;

const filePath = `src/Module/${moduleName}/pages/${fileName}/UpdatePage.tsx`;

const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
