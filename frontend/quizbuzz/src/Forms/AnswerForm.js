import React, { Component } from 'react'

export default class AnswerForm extends Component {
  
  state = {
      answer: {},
      counter: 1
    }

  postQuestion = () => {
    fetch(`http://localhost:1234/answer/create/${this.props.question}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.answer)
    })}

  nextQuestion = () => {
    this.setState({counter: 1 + this.state.counter})
    document.getElementById('answer-form').reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      answer: {
        placement: this.state.counter,
        text: e.target.answerText.value,
        img_url: e.target.answerImgUrl.value,
      }
    }, () => {
      this.postQuestion()
      this.nextQuestion()
    })}
    
  render() {
    let submit = <input type="submit" value="Next Answer" />
    let overFour =
      <div>
      <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Next Question</button>
      <button style={{textAlign: 'right'}} onClick={() => this.props.homeClick()}>Finished</button></div>

    return (
      <div>
          <h4>Answer {this.state.counter}/4</h4>
            <form onSubmit={this.handleSubmit} id="answer-form">
              <div className="ui fluid icon input">
                <input type="text" name="answerText" placeholder='Answer Here'/></div>
              <div className="ui fluid icon input">
                <input type="text" name="answerImgUrl" placeholder='(Optional) Image URL Here'/>
              <input type="text" name="connectedResult" placeholder='Connected Result Here'/></div>
              {this.state.counter < 4 ? submit : overFour}
            </form>
      </div>
    )
  }
}
