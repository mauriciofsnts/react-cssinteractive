import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const RangeInput = ({
  onChange, name, value, min, max, label, labelValue, step = 1,
}) => (
  <FormGroup>
    <Label for={`id${name}`} className="d-flex justify-content-between">
      <p>{label}</p>
      <p>
        {labelValue}
        px
      </p>
    </Label>
    <Input
      type="range"
      min={min}
      max={max}
      id={`id${name}`}
      name={name}
      value={value}
      onChange={onChange}
      step={step}
    />
  </FormGroup>
);

RangeInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
};

export default RangeInput;
