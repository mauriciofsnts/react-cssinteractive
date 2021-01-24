import React, { useState } from 'react';

import {
  Container, Row, Col, FormGroup, Label, Input,
} from 'reactstrap';

import PageHeader from '../../components/PageHeader';
import CodePreview from '../../components/CodePreview';
import AlertComponent from '../../components/Alert';
import RangeInput from '../../components/RangeInput';
import { hex2rgba } from '../../utils/helpers';

const INITIAL_STATE = {
  horizontal: 15,
  vertical: 20,
  blur: 0,
  color: '#000000',
  opacity: 0.2,
};

function TextShadow() {
  const [state, setstate] = useState(INITIAL_STATE);
  const [open, setopen] = useState(false);
  const [copied, setcopied] = useState(false);

  const toggle = () => setopen(!open);
  const reset = () => setstate(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const TEXT_SHADOW = {
    textShadow: `${state.horizontal}px ${state.vertical}px ${state.blur}px ${hex2rgba(
      state.color,
      state.opacity,
    )}`,
  };

  return (
    <Container>
      <Row style={{ height: '80vh' }}>
        <Col md={6}>
          <PageHeader
            title="Text shadow"
            description="A text-shadow CSS generator that helps you quickly generate text-shadow CSS declarations for your website. It comes with many options and it demonstrates instantly"
            toggle={toggle}
            reset={reset}
            hideCode={open}
          />

          <Row>
            <Col md={12}>
              <CodePreview open={open} copyCallback={setcopied}>
                <>
                  text-shadow:
                  {' '}
                  {`${state.horizontal}px ${state.vertical}px ${state.blur}px ${hex2rgba(
                    state.color,
                    state.opacity,
                  )}`}
                </>
              </CodePreview>

              <RangeInput
                label="Horizontal Shadow Length"
                labelValue={state.horizontal}
                value={state.horizontal}
                onChange={handleChange}
                min={-200}
                max={200}
                name="horizontal"
              />

              <RangeInput
                label="Vertical Shadow Length"
                labelValue={state.vertical}
                value={state.vertical}
                onChange={handleChange}
                min={-200}
                max={200}
                name="vertical"
              />

              <RangeInput
                label="Blur Radius"
                labelValue={state.blur}
                value={state.blur}
                onChange={handleChange}
                min={1}
                max={50}
                name="blur"
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
            </Col>
          </Row>
        </Col>

        <Col md={6} className="d-flex justify-content-center align-items-center">
          <h1 style={TEXT_SHADOW} className="mb-5">
            {' '}
            This text is the preview text
            {' '}
          </h1>
        </Col>
      </Row>

      {copied && (
        <AlertComponent text="Copied to the clipboard!" onclose={() => setcopied(false)} />
      )}
    </Container>
  );
}

export default TextShadow;
