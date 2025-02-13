
import { useColumns } from '../../components/match/useTableColumns';
import { useGetAllMatch } from '../../apis/match';
import DataTableHeader from '@Module/core/components/DataTable/DataTableHeader';
import DataTable from '@Module/core/components/DataTable/DataTable';
import DashBody from '@Module/core/components/DataTable/DashBody';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';
import { Suspense } from 'react';

const AddModal = lazy(() => import('../../components/match/CreateModal'));
const EditModal = lazy(() => import('../../components/match/UpdateModal'));


const Page = () => {
  const response = useGetAllMatch();
  const columns = useColumns();
  
  return (
    <DashBody status={response.status as AxiosQueryStatusEnum }>
      <DataTableHeader title="match page"  />
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
