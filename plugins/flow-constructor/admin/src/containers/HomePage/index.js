/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import { Card, Button, Accordion } from "react-bootstrap";
import pluginId from "../../pluginId";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-3">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Menu wireframe</Card.Title>
              <Card.Text>
                Here can be some kind of menu and button under this description
                links to page 2 of plugin
              </Card.Text>
              <Link to={`/plugins/${pluginId}/test`}>
                <Button variant="primary" className="py-2 px-4">
                  Go to Answers
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-9">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
