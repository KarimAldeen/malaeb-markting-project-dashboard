
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/event/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { eventInitialValuesType } from '@Module/website/types/event';
import { useUpdateEvent } from '@Module/website/apis/event';

function UpdateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useUpdateEvent();
  const handleSubmit = (values: eventInitialValuesType) => {
      console.log(values, 'values');
      values['isActive'] = !!values['isActive']

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
    headerText='Update event'
    status={status}
    isAddModal={false}
    >
        <Form/>
    </LayoutModal>
  )
}

export default UpdateModal
