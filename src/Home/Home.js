import { Component } from "react";
import React from 'react';
import logo from '../logo.svg';
export class Home extends Component{
    constructor(props) {
        super(props);       
      }
    render(){
        return(
            <div>
            <div> hello </div>
            <header >
                <img src={logo} className="App-logo" alt="logo" />        
            </header>
            </div>
        )
    }
}