import React, { Component } from 'react'

export default class AnswerCard extends Component {
  render() {
    return (
     <div className='ui card' 
     style={{minWidth: '280px'}} 
     onClick={() => this.props.answerQuestion(this.props.answer.key)}>
        <p className='content'>{this.props.answer.text}</p>
        {this.props.answer.img_url ? <img style={{width:'auto',height:'280px'}}className='visible content' src={this.props.answer.img_url} /> : null}
      </div>
    )
  }
}
