
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';
import { useGetAllEvent } from '@Module/website/apis/event';

const Form = () => {

  const {data} = useGetAllEvent()

  return (
    <ValidationFieldRow>
      <div>

      <ValidationField name="eventId" label='event' type="select" options={data ||[]} />

        <ValidationField name="firstTeamName" type="text" />
        <ValidationField name="firstTeamImage" type="file" />
      </div>

      <div>
        <ValidationField name="secondTeamName" type="text" />
        <ValidationField name="secondTeamImage" type="file" />

      </div>
    </ValidationFieldRow>
  );
}

export default Form
