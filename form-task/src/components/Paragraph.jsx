import React from 'react'

function Paragraph({name, children}) {
  return (
    <div>
        <p>{children} {name}</p>
    </div>
  )
}

export default Paragraph;
