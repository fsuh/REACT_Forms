import React from 'react'

const  Popup =(props) =>{
  return (
    <div>
        <h2>Your Note</h2>
        <p>First name: <span>{props.fName}</span></p>
        <p>Last name: <span>{props.lName}</span></p>
        <p>Phone number: <span>{props.phone}</span></p>
        <p>role: <span>{props.role}</span></p>
        <p>Message: <span>{props.message}</span></p>
        <button className='sendYes' onClick={props.resetHandler}>Yes, send</button>
        <button className='sendNo' onClick={props.closeHandler}>Don't Send</button>
    </div>
  )
}

export default Popup;
