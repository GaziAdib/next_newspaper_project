import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from '../features/api/rootApi';
import blogsSlice from '../features/blogs/blogsSlice';

export const store = configureStore({
    reducer: {
        [rootApi.reducerPath]: rootApi.reducer,
        blogs: blogsSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(rootApi.middleware),
});