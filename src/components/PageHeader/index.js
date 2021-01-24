import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Row, Button } from 'reactstrap';

function PageHeader({
  title, description, toggle, reset, hideCode,
}) {
  return (
    <>
      <h1 className="fs-2 text-center pt-3">{title}</h1>

      <p className="mt-2 fs-6">{description}</p>

      <Row noGutters className="pt-2 d-flex justify-content-between">
        <h5>Platform</h5>

        <ButtonGroup>
          <Button color="secondary">Web</Button>
          <Button color="primary">React</Button>
        </ButtonGroup>
      </Row>

      <hr />

      <Row noGutters className="pb-3 d-flex justify-content-between">
        <h5>Properties</h5>

        <div className="d-flex  align-items-center">
          <button type="button" className="button-p px-2 c-pointer underline" onClick={toggle}>
            {hideCode ? 'Hide code' : 'Show code'}
          </button>
          <button type="button" className="button-p px-2 c-pointer underline" onClick={reset}>
            Reset
          </button>
        </div>
      </Row>
    </>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  hideCode: PropTypes.bool.isRequired,
};

export default PageHeader;
