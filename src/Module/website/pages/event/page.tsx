
import { useColumns } from '../../components/event/useTableColumns';
import { useGetAllEvent } from '../../apis/event';
import DataTableHeader from '@Module/core/components/DataTable/DataTableHeader';
import DataTable from '@Module/core/components/DataTable/DataTable';
import DashBody from '@Module/core/components/DataTable/DashBody';
import { AxiosQueryStatusEnum } from '@Module/core/enums/Axios';
import { Suspense } from 'react';

const AddModal = lazy(() => import('../../components/event/CreateModal'));
const EditModal = lazy(() => import('../../components/event/UpdateModal'));


const Page = () => {
  const response = useGetAllEvent();
  const columns = useColumns();
  
  return (
    <DashBody status={response.status as AxiosQueryStatusEnum }>
      <DataTableHeader title="event page"  />
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
