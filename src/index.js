import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import TodoReducer from './Components/Todos';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
// import { combineReducers } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
  key: "todos",
  storage
}
const persistedReducer = persistReducer(persistConfig, TodoReducer);
const store = configureStore({
  reducer: {todos: persistedReducer }
}) 
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
