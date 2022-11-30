import React from 'react';


function Input ({type, placeholder, name}){
    return(
        <div className='formInput'>
        <input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={name}
        />
        </div>
    )
}
export default Input;