import React, { Component }  from "react";



class EventbindING extends Component{

    state={
        message:"Welcome-Home"
    }
     Clicked(){
      
     this.setState({message:"good bye come visit again"})
     }


    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.Clicked.bind(this)}>clickhere</button>
            </div>
        )
    }

}
export default EventbindING;