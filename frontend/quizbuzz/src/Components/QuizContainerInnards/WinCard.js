import React, { Component } from 'react'

export default class WinCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.winner.title}</h1>
        <h3>{this.props.winner.blurb}</h3>
        <img src={this.props.winner.img_url} />
      </div>
    )
  }
}
