import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: ''
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupPending: (state) => {
      state.isLoading = true
    },
    signupSuccess: (state) => {
      state.isLoading = false
      state.error = ''
    },
    signupFailure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  }
});

export const { signup, signupPending, signupSuccess, signupFailure }: any = signupSlice.actions;

export default signupSlice.reducer;
