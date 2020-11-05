import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialData from '../initialData';

const data = {
    tasks: initialData
};

export default function configureStore(initialState = data) {
    return creatStore(
        rootReducer,
        initialState,
        window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS__()
    );
};