import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './../../shared/components';
import './login.css';

type LoginProps = {
    history?: {
        push: Function
    }
}

const Login = ({ history }: LoginProps) => {

    const userName = useRef<HTMLInputElement>(null);
    const [emailID, setEmailID] = useState('');
    const [password, setPassword] = useState('');
    const { t } = useTranslation();

    const submitButtonHandle = (): any => {
        let emailIdValidation = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if (emailID === '' && !emailIdValidation.test(emailID) && password === '') {
            alert('Please enter the valid email id & password');
        } else if (history) {
            history.push('/form');
        }

    }
    useEffect(() => {
        if (userName && userName.current) {
            userName.current.focus();
        }

    }, []);

    return (
        <div className="root">
            <div className="container">
                <div className="login-item">
                    <div className="logo">{t('title')}</div><br />
                    <div className="form form-login">
                        <div className="form-field">
                            <label className="user"></label>
                            <input
                                value={emailID}
                                ref={userName}
                                onChange={(e) => { setEmailID(e.target.value) }}
                                id="login-username"
                                type="text"
                                placeholder={t('username')}
                                required />
                        </div>
                        <div className="form-field">
                            <label className="lock"></label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                value={password}
                                id="login-password"
                                type="password"
                                placeholder={t('password')}
                                required />
                        </div>
                        <div className="form-field">
                            <Button primary onClick={submitButtonHandle}>{t('login')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
//<Button primary onClick={submitButtonHandle}>Login</Button>


export { Login };