import React from 'react';

import { Input as InternalInput, InputProps, InputTypes } from './Input';
import { TextArea, TextAreaProps } from './TextArea';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<unknown>
  > {
  TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.TextArea = TextArea;

export { Input, TextAreaProps, InputTypes, InputProps };
