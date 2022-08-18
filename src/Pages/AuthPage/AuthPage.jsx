import React, {useContext, useEffect, useState} from 'react';
import {useFetchHttp} from "../../hooks/useFetchHttp";
import {useMessageError} from "../../hooks/useMessageError";
import {AuthContext} from "../../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessageError()
    const [form, setForm] = useState({
        email:'',
        password:''
    })
    const {loading, error, request, clearError} = useFetchHttp()

    const changeHandler = event => {
        setForm({...form ,[event.target.name]: event.target.value})
    }
    useEffect(() => {
        message(error)
        clearError()
    },[error,message, clearError])

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {

        }
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            message(data.message)
        } catch (e) {

        }
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Short link generator</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизація</span>
                        <div>
                            <div className="input-field">
                                <input
                                       id="email"
                                       type="email"
                                       name="email"
                                       value={form.email}
                                onChange={changeHandler}/>
                                    <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="email"
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={changeHandler}/>
                                <label htmlFor="email">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4"
                                style={{marginRight:'10px'}}
                                disabled={loading}
                                onClick={loginHandler}>Увійти</button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Зареєструватись
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
