import React, { Component } from 'react'

export default class QuizCard extends Component {
  render() {
    return (
      <div onClick={() => this.props.chooseQuiz(this.props.quiz)} >
        <h1>{this.props.quiz.title}</h1>
        <p>by {this.props.quiz.author}</p>
      </div>
    )
  }
}
