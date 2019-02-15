import React, { Component } from 'react'

export default class Header extends Component {

  render() {
    return (
      <div className="ui inverted segment">
        <h1 style={{float:'left'}} className="ui red inverted header">QUIZBUZZ</h1>
        <button style={{float:'right'}} onClick={() => this.props.formClick()}>Create Quiz</button>
        <button style={{float:'right'}} onClick={() => this.props.quizContainerClick()}>Take Quiz</button>
        <p >(i own all rights to buzzfeed)</p>
      </div>
    )
  }
}
