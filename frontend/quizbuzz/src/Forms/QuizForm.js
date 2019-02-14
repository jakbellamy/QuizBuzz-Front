import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import QuestionForm from './QuestionForm';


export default class QuizForm extends Component {

  state = {
    titleValue: '',
    authorValue: ''
  }

  postQuiz = (e) => {
    e.preventDefault()
    fetch('http://localhost:1234/quiz/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: this.state.titleValue,
          author: this.state.authorValue
      })
    })
  }

  updateTitle = (e) => {
    this.setState({
      titleValue: e.target.value
    })
  }
  updateAuthor = (e) => {
    this.setState({
      titleValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Create A Quiz</h2>
        <div className="ui fluid icon input">
          <h3>Ttile</h3>
            <input onChange={e => this.updateTitle(e)} placeholder='Ex. Which Office Character are You?'/>
          <h3>Author</h3>
            <input onChange={e => this.updateAuthor(e)} placeholder='Ex. Austin Plucket CEO of BuzzQuiz' />
        </div>
        <button onClick={e => this.postQuiz(e)}>Create Question</button>
      </div>
    )
  }
}
