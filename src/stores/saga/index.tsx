import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
    USER_LOGIN, LOGIN_SUCESSFUL, LOGIN_FAIL
} from '../../states/types';
import { FETCH_EMP, FETCH_EMP_SUCESS, FETCH_EMP_FAILED } from '../../states/types';
import { getEmployeeData } from '../../services/api/dummy';
//import { getInstance } from '../../services/api/common';

// const getEmployeeData = (path: string): any => {

//     return getInstance().get(path)
//         .then(response => {
//             return response;
//         })
//         .catch(error => {
//             return error;
//         });
// }

function* loginRequest(action: any) {
    try {
        const response = yield call(() => { });
        yield put({ type: LOGIN_SUCESSFUL, payload: response });
    } catch (e) {
        yield put({ type: LOGIN_FAIL, message: e.message });
    }
}

function* userLogin() {
    yield takeLatest(USER_LOGIN, loginRequest);
}

function* employeeRequest(action: any) {
    try {
        // const response = yield call(getEmployeeData('/employees'), {});
        // const response = yield getEmployeeData('/employees');
        const response = yield call(getEmployeeData, '/employees');
        console.log('SAGA::', response);
        yield put({ type: FETCH_EMP_SUCESS, payload: response });
    } catch (e) {
        yield put({ type: FETCH_EMP_FAILED, payload: e.message });
    }
}

function* getEmployeeDetails() {
    yield takeLatest(FETCH_EMP, employeeRequest);
}



export default function* rootSaga() {
    yield all([
        userLogin(),
        getEmployeeDetails()
    ])
}
