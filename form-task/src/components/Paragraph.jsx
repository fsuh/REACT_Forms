import React from 'react'

function Paragraph(props) {
  return (
    <div>
        <p>{props.children} {props.name}</p>
    </div>
  )
}

export default Paragraph;
