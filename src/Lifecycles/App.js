import React from "react"
import LifecycleA from "./Lifecycles/LifecycleA"
import Fun from "./Lifecycles/Fun"




class APP extends React.Component{
    state={
        name:"manikanta"
    }
    ChangeMyState=(e)=>{
    //  this.setState({

    //  })
    console.log("function-clicked",e);
    }
    render(){
        return(
            <div>
           <Fun myfun={this.ChangeMyState}/>
            </div>
        )
    }
}
 export default APP