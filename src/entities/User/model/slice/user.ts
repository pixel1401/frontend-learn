import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../type/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function
export const { actions: UserActions } = userSlice;
export const { reducer: UserReducer } = userSlice;
