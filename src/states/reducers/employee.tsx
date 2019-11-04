import { FETCH_EMP_SUCESS, FETCH_EMP_FAILED } from '../types';

type employeeDetails = {
    employee: any
}

type employeeAction = {
    type: string,
    payload?: []
}

const initialState = [{
    "employee_age": "1",
    "employee_name": "PTesting301020191572493079390",
    "employee_salary": "60000",
    "id": "1027",
    "profile_image": ""
}, {
    "employee_age": "2",
    "employee_name": "PTesting301020191572493079390",
    "employee_salary": "60000",
    "id": "1027",
    "profile_image": ""
}]


const Employee = (state: any = initialState, action: employeeAction) => {
    console.log('::employee::');
    switch (action.type) {
        case FETCH_EMP_SUCESS:
            return action.payload;
        case FETCH_EMP_FAILED:
            return action.payload;
        default:
            return initialState;
    }
}
export { Employee };