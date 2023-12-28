import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import Reducers from "./reducers/Auth.reducer";

export const store = createStore(Reducers, compose(applyMiddleware(thunk)));
