import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  text: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
     reset2: (state) => {
      state.text = '';
    }
  },
});

export const { increment, decrement, setText, reset, reset2 } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;