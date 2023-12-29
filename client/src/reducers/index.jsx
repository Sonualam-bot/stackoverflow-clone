import { combineReducers } from "redux";
import AuthReducer from "./Auth.reducer";
import CurrentUserReducer from "./CurrentUser.reducer";
import QuestionReducer from "./Question.reducer";

export default combineReducers({
  AuthReducer,
  CurrentUserReducer,
  QuestionReducer,
});
