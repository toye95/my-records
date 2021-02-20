import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../cards/Card';
import styles from '../Forms.module.css'
import { loginPending, loginSuccess, loginFailure } from './loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from './login.service';
import Error from '../../errors/Error';

const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

function Login() {
const dispatch = useDispatch()
const history = useHistory()
const { isLoading, error } = useSelector(((state: any) => state.login))
const [formData, setFormData] = React.useState({
    email: '',
    password: ''
})

const onChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const onSubmit = async (e: any) => {
    e.preventDefault()
    const { email, password } = formData
    if (!emailRegex.test(email) || !password) {
        dispatch(loginFailure('Form validation failed'))
        return
    };
    dispatch(loginPending())
    try {
        const isAuth: any = await userLogin(formData)
        if (isAuth.status === "error"){
            dispatch(loginFailure(isAuth.message))
        }
        dispatch(loginSuccess(isAuth))
        history.push('/home')
    } catch (e) {
        dispatch(loginFailure(e.message))
    }
}

  return (
    <div className={styles.container}>
        <Card>
            <h2>Login</h2>
            {error && <Error message={'Error: ' + error}/>}
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="email" 
                        className={styles.input}
                        value={formData.email} 
                        placeholder="Email" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        className={styles.input}
                        value={formData.password} 
                        placeholder="Password" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className={styles.button} 
                        disabled={isLoading ? true : false}>
                        {!isLoading ? 'Log In' : 'Logging in...'}
                    </button>
                </div>
            </form>
            <div>
                <p className={styles.text}>
                    Don't have an account yet ? <Link to="/signup" className={styles.link}>Sign Up</Link>
                </p>
            </div>
            <div>
                <p className={styles.text}>
                    Forgotten your password ? <Link to="/reset-password" className={styles.link}>Reset</Link>
                </p>
            </div>
        </Card>
    </div>
  );
}

export default Login;
