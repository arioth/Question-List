import React, { Component } from 'react';
import { Text, Radio } from 'react-form';

const OptionForm = (props) => (
  <div>
    <Radio value={props.index} />
    <Text field="content" placeholder="Ingrese la opcion" />
    <button type="button" onClick={props.addOption}>Add</button>
    <button type="button">Delete</button>
  </div>
)

export default OptionForm;