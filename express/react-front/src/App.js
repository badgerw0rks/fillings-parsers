import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import  Companies  from './components/Companies/Companies'
import CompanyPage from './components/CompanyPage/CompanyPage';


const  App=({url}) =>{

const [companies, setCompanies] = useState(null);
const [title, setTitle] = useState('Home')



const apiCall=(url)=>{
 return axios.get(url)
    .then(function (response) {
      console.log("!!! companies bken call")
      setCompanies(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
  
    });
}


useEffect(() => { 
  apiCall('http://localhost:3001/')
  },[url])


const setTitleByRoute=(newTitle)=>{

setTitle(newTitle);


}



  return (
    <>
      {/* Navbar from react-bootstrap */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container fluid>
        <Routes>
          <Route path="/" element={<Companies companies={companies}  />} />
          <Route path="/company/:id" element={<CompanyPage  setTitle={setTitle}/>} />
        </Routes>
      </Container>
    </>
  )
}

export default  React.memo(App)