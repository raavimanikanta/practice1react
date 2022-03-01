import React,{Component} from "react"
 
class LifecycleA extends Component{

    constructor(){
        super();   
        console.log("Hii manikanta ,You created constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA-getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleA-DidComponentMount");
    }
    render(){
        console.log("rendering-LifeCycleA")
        return(
            <h1>LifecycleA </h1>
            
        )
    }
}
export default LifecycleA