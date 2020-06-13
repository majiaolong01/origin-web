import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Routers from './router/router'
import Promise from 'promise-polyfill';
import {persistor} from './redux/store/store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import store from './redux/store/store'
import "./index.scss"
ReactDOM.render(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routers/>
        </PersistGate>
        </Provider> ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
