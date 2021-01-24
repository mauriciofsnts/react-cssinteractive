import React, { useState } from 'react';
import {
  ButtonGroup,
  Col,
  Container,
  Row,
  Button,
  FormGroup,
  Label,
  Input,
  CustomInput,
} from 'reactstrap';
import AlertComponent from '../../components/Alert';
import RangeInput from '../../components/RangeInput';

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

  const copyToClipboard = () => {
    const ta = document.createElement('textarea');
    const bxshadow = document.getElementById('codeBorderRadius').textContent;

    ta.innerText = bxshadow;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();

    setcopied(true);
  };

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
          <h1 className="fs-2 text-center pt-3">Border radius</h1>

          <p className="mt-2 fs-6">
            A border-radius CSS generator that helps you quickly generate border-radius CSS
            declarations for your website. It comes with many options and it demonstrates instantly
          </p>

          <Row noGutters className="pt-2 d-flex justify-content-between">
            <h5>Platform</h5>

            <ButtonGroup>
              <Button color="secondary">Web</Button>
              <Button color="primary">React</Button>
            </ButtonGroup>
          </Row>

          <hr />

          <Row>
            <Col md={12}>
              <Row noGutters className="pb-3 d-flex justify-content-between">
                <h5>Properties</h5>

                <div className="d-flex  align-items-center">
                  <button
                    type="button"
                    className="button-p px-2 c-pointer underline"
                    onClick={toggle}
                  >
                    Show code
                  </button>
                  <button
                    type="button"
                    className="button-p px-2 c-pointer underline"
                    onClick={reset}
                  >
                    Reset
                  </button>
                </div>
              </Row>

              {open && (
                <Row noGutters className="p-3 bg-light rounded" onClick={copyToClipboard}>
                  <p id="codeBorderRadius">
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
                  </p>
                </Row>
              )}

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
