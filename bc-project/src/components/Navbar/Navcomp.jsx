import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Service from '../Service/service'
import './nav.css'
import PROMOTEMEcopy from '../img/PROMOTEMEcopy.jpeg'


export default class Navcomp extends Component {
  render() {
    return (

        <Router>
      <div className='nav'>

       <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to={'/Home'}> <img className='logo-image' src= {PROMOTEMEcopy} alt /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/Home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/About'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/Services'}>Services</Nav.Link>
            <Nav.Link as={Link} to={'/Contact'}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>



      </div>

      <div>
      <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path="/Services" element={<Service/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>

      </div>
      
      </Router>
    )
  }
}
