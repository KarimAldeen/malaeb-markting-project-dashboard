
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/event/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { eventInitialValuesType } from '@Module/website/types/event';
import { useAddEvent } from '@Module/website/apis/event';

function CreateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useAddEvent();
  const handleSubmit = (values: eventInitialValuesType) => {
      console.log(values, 'values');
      values['isActive'] = !!values['isActive']
      mutate(values);
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Add event'
    status={status}
    >
        <Form/>
    </LayoutModal>
  )
}

export default CreateModal
