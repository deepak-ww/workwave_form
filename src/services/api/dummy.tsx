import { getInstance } from './common/index';

const getEmployeeData = (...args: any): any => {
    return getInstance().get(args[0])
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });
}

export { getEmployeeData }

