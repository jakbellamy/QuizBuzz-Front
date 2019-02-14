import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class QuestionForm extends Component {

  state = {
    counter: 1,
    question: {}
  }

  postQuestion = () => {
    fetch(`http://localhost:1234/question/create/${this.props.quiz._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.question)
    })
    .then(res => res.json())
    .then(res => this.props.holdQuestion(res))
    this.props.answersClick()
    this.setState({counter: this.state.counter + 1})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
    question: {
      text: e.target.text.value,
      img_url: e.target.img.value,
      placement: this.state.counter
  }}, () => {this.postQuestion()}
  )}


  render() {
    return (
        <div>
          <h3>Write a Question</h3>
           <form onSubmit={this.handleSubmit} id="result_form">
             <div className="ui fluid icon input">
               <input name='text' type="textarea" placeholder='What kind of pizza do you like?'/>
             </div>
             <div className="ui fluid icon input">
              <input name='img' type="text" placeholder="image url" />
             </div>
        <button type='submit'>Answer Question</button>
        </ form>
        </div>
    )
  }
}
