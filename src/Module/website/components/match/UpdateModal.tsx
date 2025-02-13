
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/match/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { matchInitialValuesType } from '@Module/website/types/match';
import { useUpdateMatch } from '@Module/website/apis/match';

function UpdateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useUpdateMatch();
  const handleSubmit = (values: matchInitialValuesType) => {
      console.log(values, 'values');

      const form = new FormData()
      form.append('images' , values.firstTeamImage)
      form.append('images' , values.secondTeamImage)
      form.append('secondTeamName' , values.secondTeamName + "")
      form.append('firstTeamName' , values.firstTeamName + "")
      form.append('eventId' , `${values.eventId}`)
      form.append('is_first_image_uploaded' ,  typeof values.firstTeamImage === 'string' ? "0":"1")


        
       mutate({
      id: Number(values?.id),
      newData: form,
        });
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Update match'
    status={status}
    isAddModal={false}
    >
        <Form/>
    </LayoutModal>
  )
}

export default UpdateModal
