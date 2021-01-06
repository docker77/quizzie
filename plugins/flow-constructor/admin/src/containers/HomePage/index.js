/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

import Example from "../../components/example";

const HomePage = () => {
  return (
    <div className="  pt-6">
      <h1>{pluginId}&apos;s HomePage</h1>

      <Example />
    </div>
  );
};

export default memo(HomePage);
