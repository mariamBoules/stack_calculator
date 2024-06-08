import react from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import Main from "./Main";
import {reducer} from "./modules";

const store = createStore(reducer);

export default () => (
  <Provider store = {store}>
    <Main />
  </Provider>
);
