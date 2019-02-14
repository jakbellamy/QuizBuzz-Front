import React, { Component } from 'react'

export default class AnswerForm extends Component {
  
  state = {
      question: {},
      answer: {},
      answers: []
    }

  handleSubmit = (e) => {
    e.preventDefault()
   
    this.setState({
      answerOne: {
        placement: 1,
        text: e.target.answerText.value,
        img_url: e.target.answerImgUrl.value,
        quiz_Id: e.target.connectedResult.value
      }
    }, () => { this.state.answers.push(this.state.answerOne)})
   
    this.setState({
      answers: this.state.answers
    })
  }

  render() {
    return (
      <div>
        <h3>Answers</h3>
          <h5>First Answer</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="ui fluid icon input">
                <input type="text" name="answerText" placeholder='Answer Here'/></div>
              <div className="ui fluid icon input">
                <input type="text" name="answerImgUrl" placeholder='(Optional) Image URL Here'/>
              <input type="text" name="connectedResult" placeholder='Connected Result Here'/></div>
              <input type="submit" value="Submit" />
            </form>
          <div>
              <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Next Question</button>
              <button style={{textAlign: 'right'}} onClick={() => this.props.homeClick()}>Finished</button>

          </div>
      </div>
    )
  }
}
