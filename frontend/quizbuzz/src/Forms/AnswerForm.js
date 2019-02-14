import React, { Component } from 'react'

export default class AnswerForm extends Component {
    
    state = {
        questionID: ''
    }


  render() {
    return (
      <div>
        <h3>Answers</h3>
          <h5>First Answer</h5>
            <div><input type="textarea" placeholder='Answer Here'/></div>
            <input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/>
          <h5>Second Answer</h5>
            <div><input type="textarea" placeholder='Answer Here'/></div>
            <input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/>
          <h5>Third Answer</h5>
            <div><input type="textarea" placeholder='Answer Here'/></div>
            <input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/>
          <h5>Fourth Answer</h5>
            <div><input type="textarea" placeholder='Answer Here'/></div>
            <input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/>
          <div>
              <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Next Question</button>
              <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Finished</button>

          </div>
      </div>
    )
  }
}
