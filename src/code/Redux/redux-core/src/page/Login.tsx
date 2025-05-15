import { useCallback, useState } from 'react';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../actions/authActions';

const Login = () => {
    const dispatch = useDispatch()
    const authState = useSelector((state: any) => state.auth)
    const [user, setUser] = useState({
        id: (Math.random() * 2) + '',
        name: '',
        password: ''
    })
    console.log('Current auth state:', authState);

    const handleSubmit = useCallback((event: React.FormEvent) => {
        event.preventDefault()
        dispatch(loginSuccess(user))
    }, [user, dispatch])
    return (
        <section className="container">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                    <h1 className="opacity">LOGIN</h1>
                    <form>
                        <input type="text" placeholder="USERNAME" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                        <input type="password" placeholder="PASSWORD" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <button className="opacity" onClick={(event) => handleSubmit(event)}>SUBMIT</button>
                    </form>

                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </section>
    )
};

export default Login;
