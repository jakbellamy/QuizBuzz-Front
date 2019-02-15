import React, { Component } from 'react'

export default class ResultForm extends Component {

  state = {
    result: {},
    counter: 1
  }

postResult = () => {
  fetch(`http://localhost:1234/result/create/${this.props.quiz._id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.result)
  })}

nextResult = () => {
  this.setState({counter: 1 + this.state.counter})
  document.getElementById('result_form').reset()
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({
    result: {
      title: e.target.title.value,
      img_url: e.target.img.value,
      blurb: e.target.blurb.value
    }
  }, () => {
    this.postResult()
    this.props.updateQuizwithResult(this.state.result)
    if(this.state.counter < 4) {
      this.nextResult()
    } else {
      this.props.questionClick()
    }
  })}

render() {
  let submit = <input type="submit" value="Next Result" />
  let overFour =  <button type="submit" style={{textAlign: 'right'}}  >Create Questions</button>

  return (
    <div>
        <h4>Result {this.state.counter}/4</h4>
          <form onSubmit={this.handleSubmit} id="result_form">
            <div className="ui fluid icon input">
              <input type="text" name="title" placeholder='Result card title'/></div>
            <div className="ui fluid icon input">
              <input type="text" name="img" placeholder='(Optional) Image URL Here'/>
            <input type="textarea" name="blurb" placeholder='Write a blurb here!'/></div>
            {this.state.counter < 4 ? submit : overFour}
          </form>
    </div>
  )
}
}