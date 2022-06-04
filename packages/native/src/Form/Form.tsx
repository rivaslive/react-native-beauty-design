import React from 'react';
import FormField, { useForm, FormProps as FormFieldProps } from 'rc-field-form';
import { FormItem, FormItemProps } from './FormItem';
import { FormProvider, useFormProvider } from './context';

interface GenericValue {
  [key: string]: unknown;
}

export interface FormProps extends FormFieldProps {}

const FormInstance = ({
  onFinishFailed,
  onValuesChange,
  ...props
}: FormProps) => {
  const { setErrors, removeError } = useFormProvider();

  const onErrors = React.useCallback(
    (e: any) => {
      if (e?.errorFields?.length) {
        const out = e.errorFields.map((f) => {
          if (f?.name?.length && f?.errors?.length) {
            return { name: f.name[0], error: f.errors[0] };
          }
          return null;
        });
        setErrors(out.filter((f) => f !== null));
      }
      onFinishFailed && onFinishFailed(e);
    },
    [onFinishFailed, setErrors]
  );

  const onInternalValuesChange = React.useCallback(
    (change: GenericValue, values: GenericValue) => {
      const keys = Object.keys(change);
      keys && keys?.length && removeError(keys[0]);
      onValuesChange && onValuesChange(change, values);
    },
    [onValuesChange, removeError]
  );

  return (
    <FormField
      component={false}
      onValuesChange={onInternalValuesChange}
      onFinishFailed={onErrors}
      {...props}
    />
  );
};

const Form = (p: FormProps) => {
  return (
    <FormProvider>
      <FormInstance {...p} />
    </FormProvider>
  );
};

Form.useForm = useForm;
Form.Item = FormItem;

export { Form, FormItemProps };
