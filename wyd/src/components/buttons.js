import React from 'react'

const TestButton = (props) => {
  return(
    <div className='button-stuff' >
    <button onClick={props.filterTrue} className="ui button">
      My Parties
    </button>
    <button onClick={props.filterFalse} className="ui button">
      All Parties
    </button>
    </div>
  )

}

export default TestButton
