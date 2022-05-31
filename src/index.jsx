import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App/index.jsx';
import store, {persistor}from './redux/store.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components.js';
import {PersistGate} from 'redux-persist/integration/react'

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

    


