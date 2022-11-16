import React from 'react'
import Paragraph from './Paragraph';


function View (props) {
  return (
    <div className='Output'>
        <h2> This is your input:</h2>
        <Paragraph 
            children="First Name:"
            name={props.fName}
        />
        <Paragraph 
            children="Last Name:"
            name={props.lName}
        />
        <Paragraph 
            children="Phone Number:"
            name={props.phone}
        />
        <Paragraph 
            children="Role:"
            name={props.role}
        />
        <Paragraph 
            children="Message:"
            name={props.message}
        />
        
    </div>
  )
}

export default View;
