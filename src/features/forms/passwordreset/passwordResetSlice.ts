import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: ''
}

export const passwordResetSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    passwordResetPending: (state) => {
      state.isLoading = true
    },
    passwordResetSuccess: (state) => {
      state.isLoading = false
      state.error = ''
    },
    passwordResetFailure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  }
});

export const { passwordReset, passwordResetPending, passwordResetSuccess, passwordResetFailure }: any = passwordResetSlice.actions;

export default passwordResetSlice.reducer;
