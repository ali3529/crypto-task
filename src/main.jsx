import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import AuthStore from "./redux/AuthStore";
import {PersistGate} from 'redux-persist/integration/react'; 
import {persistStore} from 'redux-persist';
const persistor = persistStore(AuthStore);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={AuthStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </BrowserRouter> ,
  </React.StrictMode>
);
