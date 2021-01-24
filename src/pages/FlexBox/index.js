import React, { useState } from 'react';

import {
  Col, Container, FormGroup, Input, Label, Row,
} from 'reactstrap';
import PageHeader from '../../components/PageHeader';
import CodePreview from '../../components/CodePreview';
import AlertComponent from '../../components/Alert';

const INITIAL_STATE = {
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'stretch',
};

function FlexBoxPage() {
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

  const FLEXBOX = {
    display: 'flex',
    ...state,
  };

  console.log('FLEXBOX: ', state);

  return (
    <Container>
      <Row style={{ height: '80vh' }}>
        <Col md={6}>
          <PageHeader
            title="Flexbox"
            description="Flexbox is a layout system optimized for building user interfaces. Use this interactive reference tool to recall flexbox properties and experiment with layouts."
            toggle={toggle}
            reset={reset}
            hideCode={open}
          />

          <Row>
            <Col md={12}>
              <CodePreview open={open} copyCallback={setcopied}>
                <></>
              </CodePreview>

              <FormGroup row>
                <Label for="selectFlexDirection" sm={12}>
                  Flex direction
                </Label>
                <Col sm={12}>
                  <Input
                    type="select"
                    name="flexDirection"
                    id="selectFlexDirection"
                    value={state.flexDirection}
                    onChange={handleChange}
                  >
                    <option>row</option>
                    <option>column</option>
                    <option>row-reverse</option>
                    <option>column-reverse</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="selectFlexWrap" sm={12}>
                  Flex wrap
                </Label>
                <Col sm={12}>
                  <Input
                    type="select"
                    name="flexWrap"
                    id="selectFlexWrap"
                    value={state.flexWrap}
                    onChange={handleChange}
                  >
                    <option>nowrap</option>
                    <option>wrap</option>
                    <option>wrap-reverse</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="selectJustifycontent" sm={12}>
                  Justify content
                </Label>
                <Col sm={12}>
                  <Input
                    type="select"
                    name="justifyContent"
                    id="selectJustifycontent"
                    value={state.justifyContent}
                    onChange={handleChange}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>space-between</option>
                    <option>space-around</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="selectalignItems" sm={12}>
                  Align items
                </Label>
                <Col sm={12}>
                  <Input
                    type="select"
                    name="alignItems"
                    id="selectalignItems"
                    value={state.alignItems}
                    onChange={handleChange}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>baseline</option>
                    <option>stretch</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="selectalignContent" sm={12}>
                  Align content
                </Label>
                <Col sm={12}>
                  <Input
                    type="select"
                    name="alignContent"
                    id="selectalignContent"
                    value={state.alignContent}
                    onChange={handleChange}
                  >
                    <option>flex-start</option>
                    <option>flex-end</option>
                    <option>center</option>
                    <option>space-between</option>
                    <option>space-around</option>
                    <option>stretch</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Col>

        <Col md={6} style={FLEXBOX}>
          <div className="flexItem">
            1
          </div>
          <div className="flexItem">
            2
          </div>
          <div className="flexItem">
            3
          </div>
        </Col>
      </Row>

      {copied && (
        <AlertComponent text="Copied to the clipboard!" onclose={() => setcopied(false)} />
      )}
    </Container>
  );
}

export default FlexBoxPage;
