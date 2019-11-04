import { LOGIN_SUCESSFUL, LOGIN_FAIL } from '../types';

type props = {
    flag: boolean
}

const INITIAL_VALUE: props = {
    flag: true
};

const LoginReducer = (state: any, action: any) => {
    switch (action.type) {
        case LOGIN_SUCESSFUL:
            return { ...state };
        case LOGIN_FAIL:
            return { ...state };
        default:
            return INITIAL_VALUE;
    }
}

export { LoginReducer };