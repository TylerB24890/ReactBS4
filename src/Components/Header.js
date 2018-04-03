import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import {
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

		console.log(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			location: this.props.location.pathname
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {

		return(
			<div>
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
      </div>
		)
	}
}

export default withRouter(Header);
