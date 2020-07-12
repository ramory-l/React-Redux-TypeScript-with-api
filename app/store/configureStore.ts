import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import listReducer from "./reducers/lists";
import { AppActions } from "./types/actions";
import { startAddList, addList, setLists } from "./actions/lists";
import apiClient from "../api/api";

export const rootReducer = combineReducers({
  lists: listReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

export default store;
