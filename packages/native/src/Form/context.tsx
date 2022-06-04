import React from 'react';

interface ErrorProps {
  error: string;
  name: string;
}

interface ErrorContextProps {
  errors: ErrorProps[];
  setErrors: (e: ErrorProps[]) => void;
  removeError: (name: string) => void;
}

const initialValues = {
  errors: [],
  setErrors: () => {},
  removeError: () => {},
};

export const FormContext =
  React.createContext<ErrorContextProps>(initialValues);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);

  const onChangeError = React.useCallback((e: ErrorProps[]) => {
    setErrors(e);
  }, []);

  const removeError = React.useCallback((name: string) => {
    setErrors((prevState) => prevState.filter((f) => f.name !== name));
  }, []);

  return (
    <FormContext.Provider
      value={{
        errors,
        removeError,
        setErrors: onChangeError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormProvider = () => {
  return React.useContext(FormContext);
};
