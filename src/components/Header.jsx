import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-primary p-md-4 p-3">
      <Container>
      <Navbar.Brand>

        <Link to={'/'} style={{textDecoration:'none'}}><h4 className='text-dark'> <img src="https://www.pngplay.com/wp-content/uploads/5/Alphabet-K-No-Background.png" width="65" height="40"  /> KEERTHI MOHAN</h4></Link>
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Link to={'/'} style={{textDecoration:'none'}}><h4 className='text-dark me-md-5'>HOME</h4></Link>
            <Link to={'/about'} style={{textDecoration:'none'}}><h4 className='text-dark me-md-5'>ABOUT</h4></Link>
            <Link to={'/skill'} style={{textDecoration:'none'}}><h4 className='text-dark me-md-5'>SKILLS</h4></Link>
            <Link to={'/project'} style={{textDecoration:'none'}}><h4 className='text-dark me-md-5'>PROJECT</h4></Link>
                        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header