import React from 'react'
import Paragraph from './Paragraph';


function View ({firstName, lastName, phone, role, message}) {
  return (
    <div className='Output'>
        <h2> This is your input:</h2>
        <Paragraph 
            children="First Name:"
            name={firstName}
        />
        <Paragraph 
            children="Last Name:"
            name={lastName}
        />
        <Paragraph 
            children="Phone Number:"
            name={phone}
        />
        <Paragraph 
            children="Role:"
            name={role}
        />
        <Paragraph 
            children="Message:"
            name={message}
        />
        
    </div>
  )
}

export default View;
