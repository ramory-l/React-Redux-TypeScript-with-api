import React, { FC, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { startSetLists } from "../store/actions/lists";
import { AppState } from "../store/configureStore";

const Lists: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: AppState) => state.lists);

  useEffect(() => {
    dispatch(startSetLists(lists));
  }, []);

  return (
    <ScrollView>
      <List.Section>
        {lists.map((list) => {
          return (
            <View key={list.id}>
              <List.Subheader>{list.title}</List.Subheader>
              {list.todos.map((todo) => {
                return (
                  <List.Item
                    key={todo.id}
                    title={todo.text}
                    left={() => <List.Icon icon="radiobox-blank" />}
                  />
                );
              })}
            </View>
          );
        })}
      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Lists;
