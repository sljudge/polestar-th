import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    booksData: [],
    status: 'idle',
};


export const getBooks = createAsyncThunk(
    'books/getBooks',
    async (query) => {
        const response = await fetch('http://openlibrary.org/search.json?q=' + query);
        const data = await response.json()
        return data.docs;
    }
);

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.status = 'idle';
                state.booksData = action.payload;
            });
    },
});

// export const { } = bookSlice.actions;

export default bookSlice.reducer;
