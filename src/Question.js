import React, { Component } from 'react';
import Option from './Option';

const Question = (props) => {
  const options = props.options.map((option, index) => {
    return (
      <Option key={index} content={option.content} />
    )
  });

  return (
    <a onClick={props.onClick}>
      <div>
        <p>{props.title}</p>
        <ul>{options}</ul>
      </div>
    </a>
  )
}

export default Question;
