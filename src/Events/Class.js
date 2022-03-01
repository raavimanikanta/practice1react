import React, { Component } from 'react'

export class Class extends Component {
     Clickhandler(){
        console.log("You clicked class component ")
    }
  render() {
    return (
      <div>
          <button onClick={this.Clickhandler}>clickhere</button>
      </div>
    )
  }
}

export default Class