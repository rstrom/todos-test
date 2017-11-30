import React from "react";
import Home from "../containers/Home";
import Todos from "../containers/Todos";

export default ({ id }) => {
  switch (true) {
    case id === null:
      return <Home />;
    case id === "todos":
      return <Todos />;
    default:
      return <Home />;
  }
};
