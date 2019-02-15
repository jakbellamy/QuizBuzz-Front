import React, { Component } from 'react'

export default class AnswerForm extends Component {

  state = {
      answer: {},
      counter: 1
    }

  postAnswer = () => {
    fetch(`http://localhost:1234/answer/create/${this.props.question._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.answer)
    })}

  nextAnswer = () => {
    this.setState({counter: 1 + this.state.counter})
    document.getElementById('answer-form').reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      answer: {
        placement: this.state.counter,
        text: document.querySelector('#input-text').value,
        img_url: document.querySelector('#input-img').value,
      }
    }, () => {
        this.postAnswer()
      if(this.state.counter < 4) {
        this.nextAnswer()
      }
    })}

    handleSubmitforNextQ = (e) => {
      e.preventDefault()
      this.setState({
        answer: {
          placement: this.state.counter,
          text: document.querySelector('#input-text').value,
          img_url: document.querySelector('#input-img').value,
        }
      }, () => {
        fetch(`http://localhost:1234/answer/create/${this.props.question._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.answer)
        })
        .then(this.props.questionClick)
      })}

      handleSubmitForFinished = (e) => {
        e.preventDefault()
        this.setState({
          answer: {
            placement: this.state.counter,
            text: document.querySelector('#input-text').value,
            img_url: document.querySelector('#input-img').value,
          }
        }, () => {
          fetch(`http://localhost:1234/answer/create/${this.props.question._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.answer)
          })
          .then(this.props.homeClick)
        })
      }


  render() {
    let submit = <input type="submit" value="Next Answer" />
    let overFour =
      <div>
      <button onClick={(e) => this.handleSubmitforNextQ(e)} style={{textAlign: 'right'}}>Next Question</button>
      <button onClick={(e) => this.handleSubmitForFinished(e)} style={{textAlign: 'right'}}>Finished</button></div>

        let results = this.props.quiz.results.map(result => {
          return <option value="{result.title}">{result.title.toUpperCase()}</option>
        })

    return (
      <div>
          <h4>Answer {this.state.counter}/4</h4>
            <form onSubmit={this.handleSubmit} id="answer-form">
              <div className="ui fluid icon input">
                <input id="input-text" type="text" name="answerText" placeholder='Answer Here'/></div>
              <div className="ui fluid icon input">
                <input id="input-img" type="text" name="answerImgUrl" placeholder='(Optional) Image URL Here'/>
              </div>
              <select>
                {results}
              </select>
              {this.state.counter < 4 ? submit : overFour}
            </form>
      </div>
    )
  }
}
