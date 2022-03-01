import React from "react"

class Message extends React.Component{
    state={
        Message:"hello Manikanta😍🥰"
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Hello {this.state.Message}</h1>
            </div>
        )
    }
}
   export default Message;