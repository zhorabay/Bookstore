import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WA5eot1mOTs5Y1g1bAoc/books';

const initialState = {
  books: [],
  status: null,
  error: null,
};

export const getBookItems = createAsyncThunk(
  'books/getBookItems',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBooksData = createAsyncThunk('book/addBooksData', async (bookData, thunkAPI) => {
  try {
    const resp = await axios.post(url, {
      item_id: bookData.item_id,
      title: bookData.title,
      author: bookData.author,
      category: bookData.category,
    });
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('try again');
  }
});

export const removeBooks = createAsyncThunk('book/removeBooks', async ({ thunkAPI, item_id }) => {
  try {
    const resp = await axios.delete(`${url}/${item_id}`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('The book has been deleted');
  }
});

const bookSlice = createSlice({
  name: 'Bookstore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookItems.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getBookItems.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.books = action.payload;
      })
      .addCase(getBookItems.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(addBooksData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addBooksData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.books = action.payload;
      })
      .addCase(addBooksData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(removeBooks.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.books = action.payload;
      })
      .addCase(removeBooks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
