import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import Card from '../../cards/Card';
import styles from '../Forms.module.css'
import { signupPending, signupSuccess, signupFailure } from './signupSlice';
import { useSelector, useDispatch } from 'react-redux';
import { userSignup } from './signup.service';
import Error from '../../errors/Error';

const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

function Signup() {
const dispatch = useDispatch()
const history = useHistory()
const { isLoading, error } = useSelector(((state: any) => state.signup))
const [formData, setFormData] = React.useState({
    fullname: '',
    email: '',
    password: ''
})

const onChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const onSubmit = async (e: any) => {
    e.preventDefault()
    const { fullname, email, password } = formData
    if (!fullname || !emailRegex.test(email) || !password) {
        dispatch(signupFailure('Form validation failed'))
        return
    }
    dispatch(signupPending())
    try {
        const response: any = await userSignup(formData)
        if (response.status === "error"){
            dispatch(signupFailure(response.message))
        }
        dispatch(signupSuccess())
        history.push('/')
    } catch (e) {
        dispatch(signupFailure(e.message))
    }
}
  return (
    <div className={styles.container}>
        <Card>
            <h2>Signup</h2>
            {error && <Error message={'Error: ' + error}/>}
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="fullname" 
                        className={styles.input}
                        value={formData.fullname} 
                        placeholder="Fullname" 
                        onChange={onChange}
                    />
                </div>
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
                        {!isLoading ? 'Sign Up' : 'Signing up...'}
                    </button>
                </div>
            </form>
            <div>
                <p className={styles.text}>
                    Have an account ? <Link to="/" className={styles.link}>Login</Link>
                </p>
            </div>
        </Card>
    </div>
  );
}

export default Signup;
