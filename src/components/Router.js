import React from "react";
import Home from "../containers/Home";
import Todos from "../containers/Todos";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 1rem;
  width: 36rem;
  margin: 0 auto;

  & h1 {
    font-style: italic;
  }

  & input[type="text"] {
    padding: 0.25rem 0.5rem;
    outline: none;
    font-size: 1.25rem;
  }

  & button {
    padding: 0.5rem;
    background: #444;
    background-blend-mode: multiply;
    color: #fff;
    font-size: 1.25rem;
    float: right;
    cursor: pointer;
  }
`;

export default ({ id }) => {
  switch (true) {
    case id != null:
      return (
        <Wrap>
          <h1>99todos</h1>
          <Todos />
        </Wrap>
      );
    default:
      return (
        <Wrap>
          <h1>99todos</h1>
          <Home />
        </Wrap>
      );
  }
};
