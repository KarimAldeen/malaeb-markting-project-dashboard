import { FC } from 'react';
import useFormField from '../Hooks/useFormField';
import { ValidationFieldContainer } from '../components/ValidationFieldContainer';
import { ValidationFieldLabel } from '../components/ValidationFieldLabel';
import { ValidationFieldPropsInput } from '../types/types';
import { Field } from 'formik';
import { Input } from 'antd';
const { TextArea } = Input;

const TextAreaField: FC<ValidationFieldPropsInput> = ({
  name,
  label,
  placeholder,
  ...props
}) => {
  const { errorMsg, isError, t, handleFieldBlur, value, handleFieldChange } =
    useFormField(name, props);

  return (
    <div className="ValidationField">
      <ValidationFieldLabel
        name={name}
        label={label}
        placeholder={placeholder}
        t={t}
      />
      <ValidationFieldContainer isError={isError} errorMsg={errorMsg}>
        <Field
          id={name}
          as={TextArea}
          placeholder={t(placeholder ?? label ?? name)}
          name={name}
          size="large"
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          value={value}
          {...props}
        />
      </ValidationFieldContainer>
    </div>
  );
};
export default TextAreaField;
