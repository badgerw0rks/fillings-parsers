import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {

const [companies, setCompanies] = useState(null);

useEffect(() => { 


  axios.get('http://localhost:3001/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  },[])


  return (
    <div>App</div>
  )
}
