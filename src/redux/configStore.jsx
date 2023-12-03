import { combineReducers, createStore, applyMiddleware } from "redux";
import { TodoListReducer } from "./reducers/TodoListReducer";
import reduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  TodoListReducer,
});

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
  applyMiddleware(reduxThunk)
);
export default store;
