import React from 'react'

function Label({name, children}) {
  return (
    <div className='formLabels'>
    <label htmlFor={name}>{children}
    </label>

    </div>
  )
}

export default Label