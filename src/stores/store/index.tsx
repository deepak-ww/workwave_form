import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { LoginReducer, Employee } from '../../states/reducers';
import rootSaga from '../saga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(combineReducers({
    login: LoginReducer,
    employee: Employee
}), applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;