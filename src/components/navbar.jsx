import React,{useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SetCurrentLanguage } from '../store/actions/language';
function Naavbar() {
  let lang =  useSelector((state)=> state.lang.currentlang)
  let language;
  const dispatch= useDispatch()
  function changeLanguage(language){
    console.log("click")
    dispatch(SetCurrentLanguage(lang=language))
  }
  return (
    <Navbar bg="light" expand="lg" className="fixed-top ">
      <Container >
        <Navbar.Brand href="/"><span className='text-danger'>FIFA</span> <span className='text-primary'>Players</span> <span className='text-light'>Store</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='' href="#home">Language is : <span className='text-primary text-capitalize '>{lang}</span></Nav.Link>
            <Nav.Link className='' href="#link">Link</Nav.Link>
            <NavDropdown className=''title="Choose language" id="basic-nav-dropdown">
              <NavDropdown.Item className='' href="#action/3.1" onClick={()=>{changeLanguage(language="ar")}} >arabic</NavDropdown.Item>
              <NavDropdown.Item className='' href="#action/3.3" onClick={()=>{changeLanguage(language="en")}} >English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='' href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;