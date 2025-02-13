
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/user/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { userInitialValuesType } from '@Module/website/types/user';
import { useAddUser } from '@Module/website/apis/user';

function CreateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useAddUser();
  const handleSubmit = (values: userInitialValuesType) => {
      console.log(values, 'values');
      mutate(values);
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Add user'
    status={status}
    >
        <Form/>
    </LayoutModal>
  )
}

export default CreateModal
