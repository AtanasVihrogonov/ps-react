import React from 'react';
import TextInput from 'ps-react/TextInputsStyledComponents';
import TextInputsStyledComponents from '../../../components/TextInputsStyledComponents';

/** Required TextBox with error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputsStyledComponents
        htmlId='example-optional'
        label='First Name'
        name='firstname'
        onChange={() => {}}
        required
        error='First name is required.'
      />
    );
  }
}
