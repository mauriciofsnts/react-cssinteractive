import React, { useState } from 'react';
import {
  Container, Row, Col, FormGroup, Label, Input, CustomInput,
} from 'reactstrap';

import RangeInput from '../../components/RangeInput';
import AlertComponent from '../../components/Alert';
import CodePreview from '../../components/CodePreview';
import PageHeader from '../../components/PageHeader';
import { hex2rgba } from '../../utils/helpers';

const INITIAL_STATE = {
  horizontal: 0,
  vertical: 0,
  blur: 0,
  spread: 0,
  color: '#000000',
  opacity: 1,
  inset: false,
};

function BoxShadow() {
  const [state, setstate] = useState(INITIAL_STATE);
  const [open, setopen] = useState(false);
  const [copied, setcopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (e) => {
    const { name } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: !state[name],
    }));
  };

  const toggle = () => setopen(!open);
  const reset = () => setstate(INITIAL_STATE);

  const BOX_SHADOW = {
    boxShadow: `${state.horizontal}px ${state.vertical}px ${state.blur}px ${
      state.spread
    }px ${hex2rgba(state.color, state.opacity)} ${state.inset ? 'inset' : ''}`,
    height: 300,
    width: 300,
    backgroundColor: 'red',
    overflow: 'hidden',
  };

  return (
    <Container>
      <Row style={{ height: '80vh' }}>
        <Col md={6}>
          <PageHeader
            title="Box shadow"
            description=" A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations
            for your website. It comes with many options and it demonstrates instantly"
            toggle={toggle}
            reset={reset}
            hideCode={open}
          />

          <Row>
            <Col md={12}>
              <CodePreview open={open} copyCallback={setcopied}>
                <>
                  box-shadow:
                  {' '}
                  {`${state.horizontal}px ${state.vertical}px ${state.blur}px ${
                    state.spread
                  }px ${hex2rgba(state.color, state.opacity)} ${state.inset ? 'inset' : ''}`}
                  ;
                  <br />
                  -webkit-box-shadow:
                  {' '}
                  {`${state.horizontal}px ${state.vertical}px ${state.blur}px ${
                    state.spread
                  }px ${hex2rgba(state.color, state.opacity)} ${state.inset ? 'inset' : ''}`}
                  ;
                  <br />
                  -moz-box-shadow:
                  {' '}
                  {`${state.horizontal}px ${state.vertical}px ${state.blur}px ${
                    state.spread
                  }px ${hex2rgba(state.color, state.opacity)} ${state.inset ? 'inset' : ''}`}
                  ;
                </>
              </CodePreview>

              <RangeInput
                label="Horizontal Shadow Length"
                labelValue={state.horizontal}
                value={state.horizontal}
                onChange={handleChange}
                min={-100}
                max={100}
                name="horizontal"
              />

              <RangeInput
                label="Vertical Shadow Length"
                labelValue={state.vertical}
                value={state.vertical}
                onChange={handleChange}
                min={-100}
                max={100}
                name="vertical"
              />

              <RangeInput
                label="Blur Radius"
                labelValue={state.blur}
                value={state.blur}
                onChange={handleChange}
                min={0}
                max={100}
                name="blur"
              />

              <RangeInput
                label="Spread Radius"
                labelValue={state.spread}
                value={state.spread}
                onChange={handleChange}
                min={0}
                max={100}
                name="spread"
              />

              <FormGroup>
                <Label for="shadowColor">Shadow Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="shadowColor"
                  value={state.color}
                  onChange={handleChange}
                />
              </FormGroup>

              <RangeInput
                label="Spread Shadow Color Opacity"
                labelValue={state.opacity}
                value={state.opacity}
                onChange={handleChange}
                min={0}
                max={1}
                name="opacity"
                step="0.01"
              />

              <FormGroup className="d-flex justify-content-end mt-2">
                <CustomInput
                  type="switch"
                  id="insertSwitch"
                  name="inset"
                  label="Inset"
                  value={state.inset}
                  onChange={handleSwitchChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={BOX_SHADOW} className="mb-5" />
        </Col>
      </Row>

      {copied && (
        <AlertComponent text="Copied to the clipboard!" onclose={() => setcopied(false)} />
      )}
    </Container>
  );
}

export default BoxShadow;
