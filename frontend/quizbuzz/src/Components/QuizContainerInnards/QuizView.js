import React, { Component } from 'react'
import QuestionCard from './QuestionCard';

export default class QuizView extends Component {
  render() {
    return (

        <div>
          <h1 className="ui red inverted header">{this.props.quiz.title}</h1>   
          <p>by {this.props.quiz.author}</p> 
        <div style={{float:'left'}} className="ui grid" style={{marginLeft: '100px'}} class='four wide column'>{this.props.quiz.questions.map(question => 
            <QuestionCard answerQuestion={this.props.answerQuestion} question={question} />
            )}
            </div>
            <button onClick={() => this.props.finishButton()}>Submit Quiz</button>
        </div>
    )
  }
}
