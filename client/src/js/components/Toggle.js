import React, { Component } from 'react';

export default class Toggle extends Component {
  // state = {
  //   on: false,
  // }

  // toggle = () => {
  //   this.setState({
  //     on: !this.state.on
  //   })
  // }

  render() {
    return (
      <div> {/* //? && means that if thos.state.on is true then run the code with () */}
        {this.state.on && (
        <h1>Toggle me</h1>
        )}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
