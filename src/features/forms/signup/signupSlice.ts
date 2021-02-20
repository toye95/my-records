import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  error: ''
}

export const signupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupPending: (state) => {
      state.isLoading = true
    },
    signupSuccess: (state) => {
      state.isLoading = false
      state.isAuth = true
      state.error = ''
    },
    signupFailure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  }
});

export const { signup, signupPending, signupSuccess, signupFailure }: any = signupSlice.actions;


export const selectCount = (state: any) => state;

export default signupSlice.reducer;
