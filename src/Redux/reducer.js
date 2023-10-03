// myReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNum: 1,
  carsData : []
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
  
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    },

    setCarsData: (state, action) => {
      state.carsData = action.payload;
    },
  },
});

export const { setPageNum , setCarsData } = mySlice.actions;
export default mySlice.reducer;
