import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { DatePicker } from "@buffetjs/core";

const Container = styled.div`
  padding: 30px;
`;

const Example = () => {
  const [value, setState] = useState(moment([2020, 0, 11]));

  return (
    <Container>
      <DatePicker
        name="datepicker" // This props is required
        onChange={({ target }) => setState(target.value)}
        value={value}
      />
    </Container>
  );
};

export default Example;
