
import LayoutModal from '@Module/core/design-system/LayoutModal'
import Form from './Form'
import { getInitialValues, getValidationSchema } from '@Module/website/utils/match/formUtil'
import { useObjectToEdit } from '@Module/core/states/ObjectToEditState';
import { matchInitialValuesType } from '@Module/website/types/match';
import { useAddMatch } from '@Module/website/apis/match';

function CreateModal() {
     const {objectToEdit} = useObjectToEdit()
    const { status,mutate } = useAddMatch();
  const handleSubmit = (values: matchInitialValuesType) => {
      console.log(values, 'values');
      // const data = {...values } as any

      
      const form = new FormData()
      form.append('images' , values.firstTeamImage)
      form.append('images' , values.secondTeamImage)
      form.append('secondTeamName' , values.secondTeamName + "")
      form.append('firstTeamName' , values.firstTeamName + "")
      form.append('eventId' , `${values.eventId}`)


        mutate(form);
    };
  return (
    <LayoutModal 
    getInitialValues={getInitialValues(objectToEdit)}
    getValidationSchema={getValidationSchema}
    handleSubmit={handleSubmit}
    headerText='Add match'
    status={status}
    >
        <Form/>
    </LayoutModal>
  )
}

export default CreateModal
