import React from 'react';
import { Switch } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';

const PlatformContainer = ({ children, fluid }) => (
  <Container fluid={fluid}>
    <Row>
      <Navbar />
    </Row>

    <Row>
      <Switch>{children}</Switch>
    </Row>
  </Container>
);

PlatformContainer.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool.isRequired,
};

export default PlatformContainer;
