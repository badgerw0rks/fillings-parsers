import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import  Companies  from './components/Companies' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {

const [companies, setCompanies] = useState(null);

useEffect(() => { 


  axios.get('http://localhost:3001/')
    .then(function (response) {
      // handle success
      setCompanies(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  },[setCompanies])


  return (
    <Container>
      <Row>
        <Col>
          <Companies companies={companies}></Companies>
        </Col>
      </Row>
    </Container>
  )
}
