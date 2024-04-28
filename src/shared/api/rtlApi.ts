import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

            if (token) {
                headers.set('authorization', `${token}`);
            }

            return headers;
        },
    }),

    endpoints: (builder) => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
