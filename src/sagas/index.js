import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";
import PathMatch from "path-match";
import auth0 from "auth0-js";

const auth = new auth0.WebAuth({
  domain: "99todos.eu.auth0.com",
  clientID: "q4Dga9L2GLtOnUu3ty96XBcRa5afYjFQ",
  redirectUri: "http://localhost:3000/#/todos",
  audience: "https://99todos.eu.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid"
});

export function* route({ hash, silent }) {
  try {
    const { id } = PathMatch()("#/:id?")(hash);
    if (!silent) history.pushState({}, null, hash);
    yield put({
      type: "ROUTED",
      id: id || "top"
    });
  } catch (e) {
    console.error(e);
  }
}

export function* signIn() {
  try {
    auth.authorize();
  } catch (e) {
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("ROUTE", route);
  yield takeEvery("SIGN_IN", signIn);
}
