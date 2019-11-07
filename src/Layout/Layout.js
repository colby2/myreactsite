
import { Button, Navbar, Nav, Container } from 'react-bootstrap'


import React from 'react';

export class Layout extends React.Component{
    render() {
        return (            
            <div>           
                <Container >
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

