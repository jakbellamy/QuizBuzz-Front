import React, { Component } from 'react'

export default class AnswerForm extends Component {
    
    state = {
        question: {}
    }


  render() {
    return (
      <div>
        <h3>Answers</h3>
          <h5>First Answer</h5>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Answer Here'/></div>
            <div className="ui fluid icon input"><input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/></div>
          <h5>Second Answer</h5>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Answer Here'/></div>
            <div className="ui fluid icon input"><input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/></div>
          <h5>Third Answer</h5>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Answer Here'/></div>
            <div className="ui fluid icon input"><input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/></div>
          <h5>Fourth Answer</h5>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Answer Here'/></div>
            <div className="ui fluid icon input"><input type="text" placeholder='(Optional) Image URL Here'/>
            <input type="text" placeholder='Connected Result Here'/></div>
          <div>
              <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Next Question</button>
              <button style={{textAlign: 'right'}} onClick={() => this.props.homeClick()}>Finished</button>

          </div>
      </div>
    )
  }
}
