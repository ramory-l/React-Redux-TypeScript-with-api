import { List } from "./List";

export const ADD_LIST = "ADD_LIST";
export const EDIT_LIST = "EDIT_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const SET_LISTS = "SET_LISTS";

export interface SetListAction {
  type: typeof SET_LISTS;
  lists: List[];
}

export interface EditListAction {
  type: typeof EDIT_LIST;
  list: List;
}

export interface RemoveListAction {
  type: typeof REMOVE_LIST;
  id: number;
}

export interface AddListAction {
  type: typeof ADD_LIST;
  list: List;
}

export type ListActionTypes =
  | SetListAction
  | EditListAction
  | RemoveListAction
  | AddListAction;

export type AppActions = ListActionTypes;
