import { combineReducers, createStore } from "redux";
import { testReducer } from "./reducers/testReducer";
const rootReducer = combineReducers({
  testReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
export default store;
