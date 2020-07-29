import React, { Component } from "react";
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { ReactComponent as User } from '../Images/user.svg';



export default class TopBar extends Component {
   
    
    render() {
        return (
            <div className="TopBar" >
                
                <div>
                    <Navbar color="faded" light light expand="md" >
                        <NavbarBrand href="/" className="mr-auto">Aarhus Kommune</NavbarBrand>
                        <Nav tabs  className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/foreslåedeprojeker">Foreslåede projekter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/proces">Proces</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/kontakt">Kontakt</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>  
                                    Velkommen Mads
                                    <Button href="/user">
                                        <User style={{height: '30'}}/>
                                    </Button>    
                                 
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
  
            </div>
        );
    }
  }
