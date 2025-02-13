
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';

const Form = () => {
  return (
    <ValidationFieldRow>
      <div>
        <ValidationField name="name" type="text" />
      </div>

      <div>
      </div>
    </ValidationFieldRow>
  );
}

export default Form
