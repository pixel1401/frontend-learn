import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName(state, action : PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action : PayloadAction<string>) {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: LoginActions } = loginSlice;
export const { reducer: LoginReducer } = loginSlice;
