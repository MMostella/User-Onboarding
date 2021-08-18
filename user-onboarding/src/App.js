import React from 'react';
import Form from './components/Form';

import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';

import './App.css';

function App() {
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
