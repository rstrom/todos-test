import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";

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
