import { USER_LOGIN, FETCH_EMP } from '../types';

export const userLogin = () => {
    return {
        type: USER_LOGIN
    }
}

export const getEmployeeData = () => {
    return {
        type: FETCH_EMP
    }
}