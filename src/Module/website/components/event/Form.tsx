
import ValidationField from '@Module/core/components/ValidationField/ValidationField';
import ValidationFieldRow from '@Module/core/components/ValidationField/components/ValidationFieldRow';

const Form = () => {
  return (
    <ValidationFieldRow>
      <div>
        <ValidationField name="name" type="text" />
      <ValidationField name="maxUserCountRegistered" type="number" />

      </div>

      <div>
      <ValidationField name="price" type="text" />

      <ValidationField name="isActive" type="checkbox" />

      </div>
    </ValidationFieldRow>
  );
}

export default Form
