import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../type/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, actions : PayloadAction<User>) {
            state.authData = actions.payload;
        },
        initAuthData(state) {
            const localData = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (localData && localData.length > 0) {
                state.authData = JSON.parse(localData) as User;
            }
            state._inited = true;
        },
        logOut(state) {
            localStorage.clear();
            state.authData = undefined;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: UserActions } = userSlice;
export const { reducer: UserReducer } = userSlice;
