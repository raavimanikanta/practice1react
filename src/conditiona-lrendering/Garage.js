import React from 'react'

const Garage = (props) => {
    const cars=props.cars;
  return (
      <>
      <div>Garage</div>
     {cars.length>2 && <h1>"You can release the cars for supply"</h1>};
      </>
    
  )
}

export default Garage