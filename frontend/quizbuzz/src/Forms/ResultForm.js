import React, { Component } from 'react'

export default class ResultForm extends Component {
  state = {
    quiz: {}
  }

  // updateResultOne = (e) => {this.setState({authorValue: e.target.value})}

  // handleSubmit = (e) => {
  //   e.preventDefault
    
  // }

  render() {
    return (
      <div>
        <h3>Define results for [quiz.title goes here]</h3>
          <h5>First Result</h5>
             <div className="ui fluid icon input"><input type="text" placeholder='Result Title Here'/>
            <input type="text" placeholder='(Optional) Image URL Here'/></div>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Result Blurb Here'/></div>
          <h5>Second Result</h5>
            <div className="ui fluid icon input"><input type="text" placeholder='Result Title Here'/>
            <input type="text" placeholder='(Optional) Image URL Here'/></div>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Result Blurb Here'/></div>
          <h5>Third Result</h5>
            <div className="ui fluid icon input"><input type="text" placeholder='Result Title Here'/>
            <input type="text" placeholder='(Optional) Image URL Here'/></div>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Result Blurb Here'/></div>
          <h5>Fourth Result</h5>
            <div className="ui fluid icon input"><input type="text" placeholder='Result Title Here'/>
            <input type="text" placeholder='(Optional) Image URL Here'/></div>
            <div className="ui fluid icon input"><input type="textarea" placeholder='Result Blurb Here'/></div>
          <div>
              <button style={{textAlign: 'right'}} onClick={() => this.props.questionClick()}>Define Questions</button>
          </div>
     </div>
    )
  }
}
