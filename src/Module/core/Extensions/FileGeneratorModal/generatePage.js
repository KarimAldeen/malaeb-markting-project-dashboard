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
import { useColumns } from '../../components/${fileName}/useTableColumns';
import { useGetAll${capitalizeFirstLetter(fileName)} } from '../../apis/${fileName}';
import DataTableHeader from '@Module/core/components/DataTable/DataTableHeader';
import DataTable from '@Module/core/components/DataTable/DataTable';
import DashBody from '@Module/core/components/DataTable/DashBody';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';
import { Suspense } from 'react';

const AddModal = lazy(() => import('../../components/${fileName}/CreateModal'));
const EditModal = lazy(() => import('../../components/${fileName}/UpdateModal'));


const Page = () => {
  const response = useGetAll${capitalizeFirstLetter(fileName)}();
  const columns = useColumns();
  
  return (
    <DashBody status={response.status as AxiosQueryStatusEnum }>
      <DataTableHeader title="${fileName} page"  />
      <DataTable response={response} columns={columns} />

         <Suspense fallback={<></>}>
        <AddModal />
      </Suspense>
      <Suspense fallback={<></>}>
        <EditModal />
      </Suspense>

    </DashBody>
  );
};

export default Page;
`;

const filePath = `src/Module/${moduleName}/pages/${fileName}/page.tsx`;

// Create the directories if they don't exist
const dirPath = path.dirname(filePath);
fs.mkdirSync(dirPath, { recursive: true });

fs.writeFileSync(filePath, FileContainer);

console.log(`"${fileName}" in "${moduleName}" generated successfully.`);
