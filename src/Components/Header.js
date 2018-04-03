import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import {
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class Header extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {

		return(
			<Container fluid>
        <Navbar color="faded" light expand="md">
          <Link to="/" className="navbar-brand">React Starter</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

							<IndexLinkContainer to="/">
                <NavLink href="/">Home</NavLink>
              </IndexLinkContainer>

							<LinkContainer to="/about">
									<NavLink href="/about">About</NavLink>
              </LinkContainer>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>

							{ /* Dropdown Example */ }
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Dropdown
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Navbar>
      </Container>
		)
	}
}

export default Header;
