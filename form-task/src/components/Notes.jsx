import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios'

const Notes = () => {

    const [data, setData] =useState([])

    useEffect(() => {
      axios.get('http://localhost:3001/notes')
      .then((res) => setData(res.data));
    }, [])
    
  return (
    <div>
        <h1>Your Notes</h1>
        <ul>
            {data.map((note) => (
                <li key={note.id}>
                    {note.firstName} {note.lastName},{note.phone}, {note.role},
                    {note.message}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Notes