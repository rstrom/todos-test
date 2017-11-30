import React from "react";
import { render } from "react-dom";
import auth0 from "auth0-js";

const auth = new auth0.WebAuth({
  domain: "99todos.eu.auth0.com",
  clientID: "q4Dga9L2GLtOnUu3ty96XBcRa5afYjFQ",
  redirectUri: "http://localhost:3000/#/todos",
  audience: "https://99todos.eu.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid"
});

auth.authorize();

render(<h1>Hello world</h1>, document.getElementById("root"));
