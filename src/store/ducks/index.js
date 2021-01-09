import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import user from "./user";
import image from "./image";
import workflow from "./workflow";
import subscription from "./subscription";

const appReducer = combineReducers({
  form: reduxFormReducer,
  user,
  image,
  workflow,
  subscription
});

export default (state, action) => {
  return appReducer(state, action);
};
