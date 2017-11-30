import React from "react";
import Home from "../containers/Home";

export default ({ id }) => {
  switch (true) {
    case id === null:
      return <Home />;
    default:
      return <Home />;
  }
};
