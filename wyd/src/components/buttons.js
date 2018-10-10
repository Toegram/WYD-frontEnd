import React from 'react'

const TestButton = (props) => {
  return(
    <div className='button-stuff' >
    <button onClick={props.filterTrue} className="ui button">
      My Yard Sales
    </button>
    <button onClick={props.filterFalse} className="ui button">
      All Yard Sales
    </button>
    </div>
  )

}

export default TestButton
