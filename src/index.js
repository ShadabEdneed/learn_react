import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { configureStore } from 'redux';
import Store from "./Redux/Store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

// const store = configureStore(ProductReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
