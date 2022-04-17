import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App/index.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { GlobalStyle } from './components.js';

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

    


