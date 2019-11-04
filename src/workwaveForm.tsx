import React from 'react';
import { Login } from './modules';
import { useHistory } from 'react-router-dom';

export default (props: any) => {
    const history = useHistory();
    return <Login history={history} />
}

