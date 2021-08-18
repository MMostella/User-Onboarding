import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import User from './components/User';

import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

import './App.css';

const initialFormValues = {
  first_name: '',
  last_name: '',
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
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data.data, ...users])
      })
      .catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // terms: terms.filter(term => !!formValues[term])
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <h1>Its Working</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      {
        users.map(user => {
          return (
            <User key={users.id} details={users} />
          )
        })
      }
    </div>
  );
}

export default App;
