import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/forms/login/loginSlice';
import signUpReducer from '../features/forms/signup/signupSlice'
import passwordResetReducer from '../features/forms/passwordreset/passwordResetSlice'
import homeReducer from '../features/home/homeSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    signup: signUpReducer,
    passwordReset: passwordResetReducer,
    home: homeReducer
  },
});
