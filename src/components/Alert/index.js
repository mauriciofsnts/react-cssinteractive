import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

function AlertComponent({ onclose, text }) {
  setTimeout(() => {
    onclose();
  }, 3000);

  return (
    <Alert color="success" className="clipboard-alert" fade>
      {text}
    </Alert>
  );
}

AlertComponent.propTypes = {
  onclose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default AlertComponent;
