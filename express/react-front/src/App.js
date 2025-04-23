import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import  Companies  from './components/Companies'
import CompanyPage from './components/CompanyPage';


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
    <>
      {/* Navbar from react-bootstrap */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">MySite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Companies companies={companies} />} />
          <Route path="/company/:id" element={<CompanyPage />} />
        </Routes>
      </Container>
    </>
  )
}