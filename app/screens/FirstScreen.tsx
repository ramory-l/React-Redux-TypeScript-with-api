import React from "react";
import { StyleSheet } from "react-native";
import NavBar from "../components/NavBar";
import Lists from "../components/Lists";

export default function FirstScreen() {
  return (
    <React.Fragment>
      <NavBar title="Задачи"></NavBar>
      <Lists />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
