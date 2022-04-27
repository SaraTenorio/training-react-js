import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getBooks = createAsyncThunk(
    "books/getBooks",
    async (dispatch, getState) => {
        return await fetch('http://localhost:3001/books').then(res => res.json());
    }
)

export const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        status: null,
    },
    reducers: {
        deleteBook: (state, action) => {
            state.books = state.books.filter(b => b.id !== action.payload);
        }
    },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.status = 'Loading';
        },
        [getBooks.fulfilled]: (state, action) => {
            state.status = 'Success';
            state.books = action;
        },
        [getBooks.rejected]: (state, action) => {
            state.status = 'Error';
        }
    }
})

export const { deleteBook } = booksSlice.actions;
export default booksSlice.reducer;