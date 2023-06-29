import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/dogs_logo.png'
import "../css/Navigationbar.css";
import { useLocation } from 'react-router-dom';

import { AiOutlineHome,AiOutlineTeam } from 'react-icons/ai';
import {LuLayoutDashboard } from 'react-icons/lu';
import {FaGithub } from 'react-icons/fa';


const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg">
      <Container className="nav-container d-flex justify-content-center">
        <Navbar.Brand href="/personal_page"><img src={logo} width="250" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid d-flex justify-content-center mr-auto">
            <Nav.Link href="/dogs_breed/" id={'logo'} className={`${location.pathname === '/personal_page' ? 'active-link' : ''}`}><AiOutlineHome size={25} /> Home</Nav.Link>
            <Nav.Link href="/dogs_breed/team" className={`${location.pathname === '/personal_page/data_visualization' ? 'active-link' : ''}`}><AiOutlineTeam size={25} /> Our Team</Nav.Link>
            <Nav.Link href="/dogs_breed/visualization" className={`${location.pathname === '/personal_page/data_visualization' ? 'active-link' : ''}`}><LuLayoutDashboard size={25}/> Visualization</Nav.Link>

          </Nav>

          <Nav className="ml-auto">
          <Nav.Link href="https://github.com/gregory1996/dogs_breed" target='_black'><FaGithub size={30} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
