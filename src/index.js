import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// create store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
