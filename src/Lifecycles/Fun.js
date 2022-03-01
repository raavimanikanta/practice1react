import React from 'react'

const Fun = (props) => {
    console.log(props.myfun)
  return (
      <div>
    <div>Funjs</div>
    <button onClick={()=>props.myfun("manikanta")}>MYfunbtn</button>
      </div>
   
  )
}

export default Fun

