import React from "react";

const Goalwin=()=>{
    return (
<h1>Hurrey you goaled</h1>
    )
    
}
const Goalloose=()=>{
    return (
        <h1>Oops you loosed the chance</h1>
    )
   
}

const Goal=(props)=>{
    const isgoal=props.isgoal
    return (
        <>
        {isgoal ? <Goalwin/>: <Goalloose/> }
        </>
    )
}
export default Goal;