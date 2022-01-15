import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import User from './User';
import styled from 'styled-components';

const Box=styled.div`
display:flex;
flex-direction:column;
border: 1px;
border-color: black;
border-style: dotted;
border-radius: 20px;
`
const Pic=styled.img`
object-fit: fill;
border-radius: 19px;
height: 20vh;
`
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-0" light>
          <Container>
            <NavbarBrand tag={Link} to="/"><img style={{
              
              height:"20vh",
            }} src="logo.png" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse"
             isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
               
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Products</NavLink>
                </NavItem>
              </ul>
            </Collapse>
            
                  <NavLink tag={Link} className="text-dark" to="/description">
                    <Box><Pic src="user.png"/></Box>
                  </NavLink>
                
          </Container>
        </Navbar>
      </header>
    );
  }
}
