import React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Main from "./screen/Main";

function App() {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
