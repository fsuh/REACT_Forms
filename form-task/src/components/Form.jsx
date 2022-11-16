import React from 'react';
import Input from './Input';
import Label from './Label';

function Form (props){
    return(
        <form onChange={props.onChange} onSubmit={props.submit}>
            <Label 
                name="fName"
                children="First Name"
            />
            <Input 
                type="text"
                placeholder="Enter your First name"
                name="fName"
            />
            <Label 
                name="lName"
                children="Last Name"
            />
            <Input 
                type="text"
                placeholder='Enter your Last Name'
                name='lName'
            />
            <Label 
                name="phone"
                children="Phone Number"
            />
            <Input 
                type="tel"
                name='phone'
            />
            <select name="role" id='role' defaultValue='choice'>
                <option value='choice' disabled>Select a role</option>
                <option value="projectOwner">Project Owner</option>
                <option value="scrumMaster">Scrum Master</option>
                <option value="designer">Designer</option>
                <option value="developer">Developer</option>
            </select>

            <Label 
                name="message"
                children="Message"
            />
            <Input
            type='textarea'
            name='message'
            placeholder='Enter your messager here' 
            />
            <button type='submit'>Send</button>
           
        </form>
    )
}

export default Form