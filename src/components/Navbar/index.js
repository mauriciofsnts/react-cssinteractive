import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem,
} from 'reactstrap';

import * as ROUTES from '../../constants/routes';

function NavbarComponent({ history }) {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => setisOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      className="w-100 text-white d-flex justify-content-center align-items-center"
      expand="lg"
      dark
    >
      <NavbarBrand
        className="flex-grow-1 text-white c-pointer"
        onClick={() => history.push(ROUTES.HOME)}
      >
        css-interactive
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem className="mx-2 c-pointer" onClick={() => history.push(ROUTES.BOXSHADOW)}>
            Box shadow
          </NavItem>
          <NavItem className="mx-2 c-pointer" onClick={() => history.push(ROUTES.BORDERRADIUS)}>
            Border radius
          </NavItem>
          <NavItem className="mx-2 c-pointer" onClick={() => history.push(ROUTES.TEXTSHADOW)}>
            Text shadow
          </NavItem>
          <NavItem className="mx-2">Gradientes</NavItem>
          <NavItem className="mx-2 c-pointer" onClick={() => history.push(ROUTES.FLEXBOX)}>
            Flexbox
          </NavItem>
          <NavItem className="mx-2">Button Generator</NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

NavbarComponent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(NavbarComponent);
