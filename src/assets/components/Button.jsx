import React from 'react'

function Button(props) {
  return (
    <div>

<button style ={{backgroundColour: "black", borderRadius: '8px', colour: "white", curser: 'pointer' }} >{props.name}</button>

    </div>
  )
}

export default Button