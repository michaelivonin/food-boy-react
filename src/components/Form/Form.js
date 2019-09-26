import React from 'react';
import './Form.sass';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <Select name="branch" label="Филиал" defaultValue="option1" required={true}>
          <Option value="option1" label="Автоматически" />
          <Option value="option2" label="Фрунзе, 40" />
        </Select>
      </form>
    );
  }
}

export default Form;