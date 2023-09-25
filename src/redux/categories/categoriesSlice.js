import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: ' ',
};

const categoriesSlice = createSlice({
  name: 'Bookstore',
  initialState,
  reducer: {
    checkStatus: (state) => {
      return {
        ...state,
        status: 'Under construction',
      };
    },
  },
});

export default categoriesSlice.reducer;
