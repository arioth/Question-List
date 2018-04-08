import React, { Component } from 'react';
import { Text, Form, Checkbox, Radio, RadioGroup, NestedField } from 'react-form';
import OptionForm from './OptionForm';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      ...props.initialValue
    };
  }

  render() {
    return (
      <Form defaultValues={this.state} onSubmit={this.props.onSubmit} render={(formAPI) => {
        return (
          <form onSubmit={formAPI.submitForm}>
            <Text field="title" placeholder="Ingrese la pregunta" />
            <NestedField field="options" render={() => (
              <div>
                { formAPI.values.options && formAPI.values.options.map((option, i) => (
                  <div key={i}>
                    <NestedField field={i} render={() => (
                      <div>
                        <input type="radio" name="rightAnswer" onChange={() => (formAPI.setValue('rightAnswer', i))} />
                        <Text field="content" placeholder="Ingrese la opcion" />
                        <button type="button" onClick={() => formAPI.addValue("options", {})}>Add</button>
                        { formAPI.values.options.length < 2 ? null :  <button type="button" onClick={() => formAPI.removeValue("options", i)}>Delete</button> } 
                      </div>
                    )} />
                  </div>
                ))}
              </div>
            )} />
            <button type="submitt">Submit</button>
          </form>
        )
      }} />
    )
  }
}

export default QuestionForm;