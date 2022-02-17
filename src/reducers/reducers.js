import { combineReducers } from "redux";
import authReducer from "./authReducer";
import enviosReducer from "./enviosReducer";
const reducer = combineReducers({
  // reducers
  auth: authReducer,
  envios: enviosReducer,
});

export { authReducer, enviosReducer };
export default reducer;
