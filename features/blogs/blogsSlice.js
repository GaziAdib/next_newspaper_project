// Blogs Slice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogSearch: '',
    rawBlogs: [
        { id: 1, title: 'Test Title 1', category: 'science' },
        { id: 2, title: 'Test Title 2', category: 'science' },
        { id: 3, title: 'Test Title 3', category: 'science' },
        { id: 4, title: 'Test Title 4', category: 'arts' },
        { id: 5, title: 'Test Title 5', category: 'arts' },
        { id: 6, title: 'Test Title 6', category: 'arts' }
    ]

};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        searchBlog: (state, action) => {
            state.blogSearch = action.payload;
        },
        clearSearchBlog: (state) => {
            state.blogSearch = '';
        }
    }
});


export default blogSlice.reducer;
export const { searchBlog, clearSearchBlog } = blogSlice.actions
