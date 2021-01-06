/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import Accordion from "../../components/accordion";
import Example from "../../components/example";

const HomePage = () => {
  return (
    <div className="container pt-3">
      <div className="row">
        <div
          className="col-6 pt-3"
          style={{
            marginBottom: "1.6rem",
            fontSize: "1.3rem",
            fontFamily: "Lato",
          }}
        >
          <Accordion />
        </div>
        <div className="col-6">
          <h1>Test rows</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">Test cols</div>
      </div>
    </div>
  );
};

export default memo(HomePage);
