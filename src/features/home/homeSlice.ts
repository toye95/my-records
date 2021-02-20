import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  data: []
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true
    },
    success: (state) => {
      state.isLoading = false
      state.error = ''
    },
    failure: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    setRecords: ( state, { payload } ) => {
        state.data = payload
    }
  }
});

export const { home, setRecords, pending, success, failure }: any = homeSlice.actions;

export default homeSlice.reducer;
