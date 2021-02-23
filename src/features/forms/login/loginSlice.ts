import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isLoading: boolean,
  isAuth: boolean,
  error: string,
  userDetails: any | null
}
const initialState: InitialState = {
  isLoading: false,
  isAuth: false,
  error: '',
  userDetails: null
}

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false
      state.isAuth = true
      state.error = ''
      state.userDetails = payload
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  }
});

export const { login, loginPending, loginSuccess, loginFailure }: any = loginSlice.actions;

export default loginSlice.reducer;
