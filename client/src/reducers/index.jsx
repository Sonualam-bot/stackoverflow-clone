import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import CurrentUserReducer from "./CurrentUser.reducer";

export default combineReducers({
  AuthReducer,
  CurrentUserReducer,
});
