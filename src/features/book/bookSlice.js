import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WA5eot1mOTs5Y1g1bAoc/books';

const initialState = {
  booksByItem: {},
  isLoading: true,
  error: null,
};

export const getBookItems = createAsyncThunk(
  'book/getBookItems',
  async (thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const bookSlice = createSlice({
  name: 'Bookstore',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      const { itemId, books } = action.payload;
      state.booksByItem[itemId] = books;
    },
    removeBook: (state, action) => {
      const { itemId, bookId } = action.payload;
      state.booksByItem[itemId] = state.booksByItem[itemId].filter((book) => book.id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksByItem = action.payload;
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBooks, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
