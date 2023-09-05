import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../type/profile';

const initialState: ProfileSchema = {
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = profileSlice;
export const { reducer: ProfileReducer } = profileSlice;
