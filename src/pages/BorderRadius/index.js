import React, { useState } from 'react';
import {
  Col, Container, Row, FormGroup, Label, Input, CustomInput,
} from 'reactstrap';

import PageHeader from '../../components/PageHeader';
import AlertComponent from '../../components/Alert';
import RangeInput from '../../components/RangeInput';
import CodePreview from '../../components/CodePreview';

const INITIAL_STATE = {
  topleft: 0,
  topright: 0,
  bottomleft: 0,
  bottomright: 0,
  width: 50,
  color: '#000',
  background: '#a83232',
  style: 'solid',
  all: 0,
  includeBg: false,
};

function BorderRadiusPage() {
  const [state, setstate] = useState(INITIAL_STATE);
  const [copied, setcopied] = useState(false);
  const [open, setopen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeGlobal = (e) => {
    const { value } = e.target;

    setstate((prev) => ({
      ...prev,
      topleft: value,
      topright: value,
      bottomleft: value,
      bottomright: value,
      all: value,
    }));
  };

  const handleSwitchChange = (e) => {
    const { name } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: !state[name],
    }));
  };

  const reset = () => setstate(INITIAL_STATE);
  const toggle = () => setopen(!open);

  const BODER_RADIUS = {
    height: 300,
    width: 300,
    backgroundColor: state.background,
    overflow: 'hidden',
    border: `${state.width}px ${state.style} ${state.color}`,
    borderRadius: `${state.topleft}px ${state.topright}px ${state.bottomleft}px ${state.bottomright}px`,
  };

  return (
    <Container>
      <Row style={{ height: '80vh' }}>
        <Col md={6} className="bshadow-container">
          <PageHeader
            title="Border radius"
            description="A border-radius CSS generator that helps you quickly generate border-radius CSS
            declarations for your website. It comes with many options and it demonstrates instantly"
            reset={reset}
            toggle={toggle}
            hideCode={open}
          />

          <Row>
            <Col md={12}>
              <CodePreview open={open} copyCallback={setcopied}>
                <>
                  border-radius:
                  {' '}
                  {`${state.topleft}px ${state.topright}px ${state.bottomleft}px ${state.bottomright}px`}
                  ;
                  <br />
                  -webkit-border-radius:
                  {' '}
                  {`${state.topleft}px ${state.topright}px ${state.bottomleft}px ${state.bottomright}px`}
                  ;
                  <br />
                  -moz-border-radius:
                  {' '}
                  {`${state.topleft}px ${state.topright}px ${state.bottomleft}px ${state.bottomright}px`}
                  ;
                  <br />
                  border:
                  {' '}
                  {`${state.width}px ${state.style} ${state.color}`}
                  ;
                  <br />
                  {`${state.includeBg ? `background: ${state.background};` : ''}`}
                </>
              </CodePreview>

              <RangeInput
                label="All Corners Radius"
                labelValue={state.all}
                value={state.all}
                onChange={handleChangeGlobal}
                min={0}
                max={200}
                name="all"
              />

              <RangeInput
                label="Top Left Radius"
                labelValue={state.topleft}
                value={state.topleft}
                onChange={handleChange}
                min={0}
                max={200}
                name="topleft"
              />

              <RangeInput
                label="Top Right Radius"
                labelValue={state.topright}
                value={state.topright}
                onChange={handleChange}
                min={0}
                max={200}
                name="topright"
              />

              <RangeInput
                label="Bottom Left Radius"
                labelValue={state.bottomleft}
                value={state.bottomleft}
                onChange={handleChange}
                min={0}
                max={200}
                name="bottomleft"
              />

              <RangeInput
                label="Bottom Right Radius"
                labelValue={state.bottomright}
                value={state.bottomright}
                onChange={handleChange}
                min={0}
                max={200}
                name="bottomright"
              />

              <RangeInput
                label="Border Width"
                labelValue={state.width}
                value={state.width}
                onChange={handleChange}
                min={0}
                max={200}
                name="width"
              />

              <FormGroup>
                <Label for="borderColor">Border Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="borderColor"
                  value={state.color}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup row>
                <Label for="exampleSelect" sm={12}>
                  Border Style
                </Label>
                <Col sm={12}>
                  <Input type="select" name="style" id="exampleSelect" onChange={handleChange}>
                    <option>solid</option>
                    <option>dotted</option>
                    <option>dashed</option>
                    <option>double</option>
                    <option>groove</option>
                    <option>ridge</option>
                    <option>inset</option>
                    <option>outset</option>
                    <option>none</option>
                    <option>hidden</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup>
                <Label for="backgroundColor">Background Color</Label>
                <Input
                  type="color"
                  name="background"
                  id="backgroundColor"
                  value={state.background}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup className="d-flex justify-content-end mt-2">
                <CustomInput
                  type="switch"
                  id="includeBgSwitch"
                  name="includeBg"
                  label="Include background color in generating code"
                  value={state.includeBg}
                  onChange={handleSwitchChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center mt-5">
          <div style={BODER_RADIUS} className="mb-5" />
        </Col>
      </Row>

      {copied && (
        <AlertComponent text="Copied to the clipboard!" onclose={() => setcopied(false)} />
      )}
    </Container>
  );
}

export default BorderRadiusPage;
