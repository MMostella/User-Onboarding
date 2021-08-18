import React, { useState, useEffect } from 'react';
import Form from './components/Form';

import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  term: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUser = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        // console.log(res);
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <h1>Its Working</h1>
      {/* <Form 
        values={}
        change={}
      /> */}
    </div>
  );
}

export default App;
