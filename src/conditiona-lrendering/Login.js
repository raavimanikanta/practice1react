import React from 'react'

function Welcome(){
    return(
        <>
        <div>Iam coming to city</div>
        <button>log-out</button>
        </>
    )
}
function Guest(){
    return(
        <>
        <div>Iam going  back to city</div>
        <button>log-in</button>
        </>
    )
}

const Login = (props) => {
    const loggind=props.loggind
    if(loggind){
        return <Welcome/>
    }
    return <Guest />
  


}

export default Login