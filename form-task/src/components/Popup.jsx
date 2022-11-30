import React from 'react'

const  Popup =({firstName, lastName, phone, role, message, resetHandler, closeHandler}) =>{
  return (
    <div>
        <h2>Your Note</h2>
        <p>First name: <span>{firstName}</span></p>
        <p>Last name: <span>{lastName}</span></p>
        <p>Phone number: <span>{phone}</span></p>
        <p>role: <span>{role}</span></p>
        <p>Message: <span>{message}</span></p>
        <button className='sendYes' onClick={resetHandler}>Yes, send</button>
        <button className='sendNo' onClick={closeHandler}>Don't Send</button>
    </div>
  )
}

export default Popup;
