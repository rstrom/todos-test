import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";
import PathMatch from "path-match";
import auth0 from "auth0-js";
import _ from "lodash";

const auth = new auth0.WebAuth({
  domain: "99todos.eu.auth0.com",
  clientID: "q4Dga9L2GLtOnUu3ty96XBcRa5afYjFQ",
  redirectUri: "http://localhost:3000",
  audience: "https://99todos.eu.auth0.com/userinfo",
  responseType: "token id_token",
  scope: "openid"
});

export function* route({ hash, silent }) {
  try {
    const { id } = PathMatch()(":id?")(hash);
    if (!silent) history.pushState({}, null, hash);
    yield put({
      type: "ROUTED",
      id
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

export function* loadTodos() {
  try {
    const getTodos = yield call(
      fetch,
      "http://todo-backend-sinatra.herokuapp.com/todos"
    );
    const todos = yield call([getTodos, getTodos.json]);
    const orderedTodos = _.sortBy(todos, "order");
    yield put({
      type: "LOADED_TODOS",
      todos: orderedTodos
    });
  } catch (e) {
    console.error(e, e.stack);
  }
}

export function* updateItem({ item }) {
  try {
    const patchItem = yield call(
      fetch,
      `http://todo-backend-sinatra.herokuapp.com/todos/${item.uid}`,
      {
        method: "PATCH",
        body: JSON.stringify(item)
      }
    );
    yield call([patchItem, patchItem.json]);
    yield loadTodos();
  } catch (e) {
    console.error(e, e.stack);
  }
}

export function* createItem({ item }) {
  try {
    const postItem = yield call(
      fetch,
      `http://todo-backend-sinatra.herokuapp.com/todos`,
      {
        method: "POST",
        body: JSON.stringify(item)
      }
    );
    yield call([postItem, postItem.json]);
    yield loadTodos();
  } catch (e) {
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("ROUTE", route);
  yield takeEvery("SIGN_IN", signIn);
  yield takeEvery("LOAD_TODOS", loadTodos);
  yield takeEvery("UPDATE_ITEM", updateItem);
  yield takeEvery("CREATE_ITEM", createItem);
}
