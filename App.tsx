import React from "react";
import FirstScreen from "./app/screens/FirstScreen";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import store from "./app/store/configureStore";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <FirstScreen />
      </PaperProvider>
    </StoreProvider>
  );
}
