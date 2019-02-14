import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
export default class QuestionForm extends Component {


  render() {
    return (
        <div>
        <h3>Write a Question</h3>
        <div className="ui fluid icon input">
          <h3>Question</h3>
            <input type="textarea" placeholder='What kind of pizza do you like?'/>
        </div>
        <div className="ui fluid icon input">
          <h3>Link an Image</h3><p>(optional)</p>
            <input type="text" placeholder="image url" />
        </div>
        <button onClick={() => this.props.answersClick()}>Question Answers</button>
        </div>
    )
  }
}
