import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConfigureStore from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './css/ToDo.css';
import { configure } from '@testing-library/react';

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'))