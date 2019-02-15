import React, { Component } from 'react'
import AnswerCard from './AnswerCard';

export default class QuestionCard extends Component {
  render() {
      
    return (
      <div className='ui card'>
        <div className='content'>
         <h3>{this.props.question.text}</h3>
        </div>
        {this.props.question.img_url ? <img className='visible content' src={this.props.question.img_url} style={{width:'280',height:'280px'}}/> : null}
        <div className='ui grid'>
          <div className='four wide column'>
          {this.props.question.answers.map(answer => 
            <AnswerCard answerQuestion={this.props.answerQuestion} answer={answer}/>
            )}
            </div>
        </div>
      </div>
    )
  }
}
