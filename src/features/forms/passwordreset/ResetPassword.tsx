import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../cards/Card';
import styles from '../Forms.module.css'
import { passwordResetPending, passwordResetSuccess, passwordResetFailure } from './passwordResetSlice';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword } from './resetPassword.service';
import Error from '../../errors/Error';

const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

function ResetPassword() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { isLoading, error } = useSelector(((state: any) => state.passwordReset))
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

const onChange = (e: any) => {
    setFormData({...formData, [e.target.name]: e.target.value})
}

const onSubmit = async (e: any) => {
    e.preventDefault()
    const { email, password, confirmPassword } = formData
    if (!emailRegex.test(email) || !password || !confirmPassword) {
        dispatch(passwordResetFailure('Form validation failed'))
        return
    } else {
        if (password !== confirmPassword){
            dispatch(passwordResetFailure('Passwords do not match'))
            return
        }
    }
    dispatch(passwordResetPending())
    try {
        const isAuth: any = await resetPassword(formData)
        if (isAuth.status === "error"){
            dispatch(passwordResetFailure(isAuth.message))
        }
        dispatch(passwordResetSuccess())
        history.push('/')
    } catch (e) {
        dispatch(passwordResetFailure(e.message))
    }
}
  return (
    <div className={styles.container}>
        <Card>
            <h2>Reset Password</h2>
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
                        placeholder="New Password" 
                        onChange={onChange}
                    />
                </div>            
                <div>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        className={styles.input}
                        value={formData.confirmPassword} 
                        placeholder="Confirm New Password" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className={styles.button} 
                        disabled={isLoading ? true : false}>
                        {!isLoading ? 'Save' : 'Saving...'}
                    </button>
                </div>
            </form>
            <div>
                <p className={styles.text}>
                    Back to <Link to="/" className={styles.link}>Login</Link>
                </p>
            </div>
        </Card>
    </div>
  );
}

export default ResetPassword;
