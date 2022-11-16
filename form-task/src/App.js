import React, { Component } from 'react';
import './App.css';
import View from './components/View';
import Form from './components/Form';
import Popup from './components/Popup';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      note:{fName:'',lName:'', phone:'', role:'',message:''},
       showPopup: false
    }
  }

  changeHandle =(event)=>{
    this.setState({
      note:{...this.state.note, [event.target.name]:event.target.value}
    })
  }

  submitHandler = (e) =>{
    e.preventDefault()
    this.setState({showPopup: !this.state.showPopup})
  }
  resetHandler =() =>{
   window.location.reload()
    /*this.setState({
       fName:'',
        lName:'',
        phone:'',
        role:'',
        message:'',
        showPopup:false,
    })*/
  }
  closeHandler =() =>{
    this.setState({
      showPopup:false
    })
  }

  render() {
    return (
      <div className='App'>
      <h1>React Form Task</h1>
      <Form 
        onChange={this.changeHandle}
        submit={this.submitHandler}
      />
      <View {...this.state.note} />
      
      {this.state.showPopup && (<Popup
        fName={this.state.note.fName}
        lName={this.state.note.lName}
        phone={this.state.note.phone}
        role={this.state.note.role}
        message={this.state.note.message}
        closeHandler={this.closeHandler}
        resetHandler={this.resetHandler}
      />)}
      </div>
    )
  }
}

export default App;