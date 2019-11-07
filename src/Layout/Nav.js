import { Button, Navbar, Nav, } from 'react-bootstrap'
import React from 'react';

export class Navigation extends React.Component{
    render() {
        return (            
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>                   
            </Navbar>              
            </div>
        )
    }
}