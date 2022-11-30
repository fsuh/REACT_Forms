import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import './App.css';
import View from './components/View';
import Form from './components/Form';
import Popup from './components/Popup';
import Notes from './components/Notes';



const App = () => {

  const [note, setNote] = useState({
    firstName:'',
    lastName:'',
    phone:'',
    role:'',
    message:'',
  })


  const [showPopup, setShowPopUp] = useState(false)


  const changeHandle =(event)=>{
    setNote({...note, [event.target.name]:event.target.value}
    )
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    setShowPopUp(true)
  }

  const resetHandler =() =>{
    postHandler()
   window.location.reload()
  }

  const postHandler = () => {
    axios.post('http://localhost:3001/notes', note)
    .then((res) =>console.log(res))
    .catch((err) => console.log(err))

  };

  const closeHandler =() =>{
    setShowPopUp(false)
  }


  return (
    <div className='App'>
      <h1>React Form Task</h1>
      <Form 
        onChange={changeHandle}
        submit={submitHandler}
      />
      <View {...note} />
      
      {showPopup && (<Popup
        firstName={note.firstName}
        lastName={note.lastName}
        phone={note.phone}
        role={note.role}
        message={note.message}
        closeHandler={closeHandler}
        resetHandler={resetHandler}
      />)}

      <Notes />
      </div>
  )
}

export default App
