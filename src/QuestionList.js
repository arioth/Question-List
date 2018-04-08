import React, { Component } from 'react';
import { list } from 'postcss';
import Question from './Question';
import QuestionForm from './form/QuestionForm';

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: {},
      showForm: false,
      questions: [
        {
          id: 1,
          title: 'Pregunta 1',
          options: [
            {
              id: 1,
              content: 'Opcion 1',
              right_answer: true
            },
            {
              id: 2,
              content: 'Opcion 2',
              right_answer: false
            },
            {
              id: 3,
              content: 'Opcion 3',
              right_answer: false
            },
            {
              id: 4,
              content: 'Opcion 4',
              right_answer: false
            }
          ]
        }
      ]
    };
  }

  handleSubmit({ options, title, rightAnswer, id }) {
    if (rightAnswer) {
      options[rightAnswer].right_answer = true;
    }

    if (id) {
      const index = this.state.questions.findIndex((question) => (question.id == id));

      this.setState({
        showForm: false,
        initialValue: {},
        questions: [
          ...this.state.questions.slice(0, index),
          {
            id: id,
            title: title,
            options: options
          },
          ...this.state.questions.slice(index + 1)
        ]
      })
    } else {
      this.setState({
        showForm: false,
        initialValue: {},
        questions: [
          ...this.state.questions,
          {
            title: title,
            options: options
          }
        ]
      });
    }
  }

  handleShowForm(initialValue) {
    this.setState({
      ...this.state,
      showForm: true,
      initialValue: initialValue
    })
  }

  render() {
    const newQuestion = {
      options: [
        {
          content: '',
          right_answer: false
        },
        {
          content: '',
          right_answer: false
        },
        {
          content: '',
          right_answer: false
        }
      ]
    };

    const questions = this.state.questions.map((question, index) => (
      <Question onClick={this.handleShowForm.bind(this, question)} key={index} title={question.title} options={question.options}></Question>
    ));

    return (
      <div className="question-list">
        <div>{questions}</div>
        <button onClick={this.handleShowForm.bind(this, newQuestion)}>Add new question</button>
        { this.state.showForm ? <QuestionForm onSubmit={ this.handleSubmit.bind(this) } initialValue={ this.state.initialValue } /> : null }
      </div>
    );
  }
}

export default QuestionList;
