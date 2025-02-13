
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/user/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { userInitialValuesType } from '@Module/website/types/user';
import { useUpdateUser } from '@Module/website/apis/user';

function UpdateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useUpdateUser();
  const handleSubmit = (values: userInitialValuesType) => {
      console.log(values, 'values');
       mutate({
      id: Number(values?.id),
      newData: values,
        });
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Update user'
    status={status}
    isAddModal={false}
    >
        <Form/>
    </LayoutModal>
  )
}

export default UpdateModal
