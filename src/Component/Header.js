import React from "react";
import {Navbar,Nav} from "react-bootstrap"

function Header(props){
    return(
        <div>
            <Navbar bg='info' expand='lg'>
            <Navbar.Brand href="#">{props.App}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default Header;