import {
  ListActionTypes,
  ADD_LIST,
  REMOVE_LIST,
  EDIT_LIST,
  SET_LISTS,
} from "../types/actions";
import { List } from "../types/List";

const listsReducerDefaultState: List[] = [];

const listReducer = (
  state = listsReducerDefaultState,
  action: ListActionTypes
): List[] => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.list];
    case REMOVE_LIST:
      return state.filter(({ id }) => id !== action.id);
    case EDIT_LIST:
      return state.map((list) => {
        if (list.id === action.list.id) {
          return {
            ...list,
            ...action.list,
          };
        } else {
          return list;
        }
      });
    case SET_LISTS:
      return action.lists;
    default:
      return state;
  }
};

export default listReducer;
