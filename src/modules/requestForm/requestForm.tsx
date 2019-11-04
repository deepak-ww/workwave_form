import React, { useEffect } from 'react';
// import { getInstance } from '../../services/api/common';
import { useDispatch } from 'react-redux';
import { getEmployeeData } from '../../states/actions';
import './request.css';

const RequestForm = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployeeData());
        // getInstance().get('/employees').then((response) => {
        //     console.log('Response', response);
        // }).catch(error => {
        //     console.log('error', error);
        // })
    }, []);

    return (<div className="container">
        <div>
            Request Form
        </div>
    </div>);
}

export { RequestForm };
