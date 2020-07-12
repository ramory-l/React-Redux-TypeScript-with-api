import {
  AppActions,
  ADD_LIST,
  REMOVE_LIST,
  EDIT_LIST,
  SET_LISTS,
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../configureStore";
import { List } from "../types/List";
import apiClient from "../../api/api";

export const addList = (list: List): AppActions => ({
  type: ADD_LIST,
  list,
});

export const removeList = (id: number): AppActions => ({
  type: REMOVE_LIST,
  id,
});

export const editList = (list: List): AppActions => ({
  type: EDIT_LIST,
  list,
});

export const setLists = (lists: List[]): AppActions => ({
  type: SET_LISTS,
  lists,
});

export const startAddList = (listData: List) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const {
      id,
      title,
      candidate_id,
      created_at,
      updated_at,
      todos = [],
    } = listData;
    const list = { id, title, candidate_id, created_at, updated_at, todos };

    dispatch(addList(list));
  };
};

export const startRemoveList = (id: number) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(removeList(id));
  };
};

export const startEditList = (list: List) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(editList(list));
  };
};

export const startSetLists = (lists: List[]) => {
  //console.log(database);
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiClient
      .get("/list")
      .then((res) => res.data)
      .then((res) => dispatch(setLists(res)));
  };
};
