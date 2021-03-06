import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";


class Menu extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Expenshare</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to={this.props.url} exact className="nav-link">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url + "/expense"} className="nav-link">Dépenses</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url + "/person"} className="nav-link">Personnes</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        )
            ;
    }
}

export default Menu;