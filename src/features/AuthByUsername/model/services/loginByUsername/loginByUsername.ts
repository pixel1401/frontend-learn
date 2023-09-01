import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username : string,
    password :string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue : string}>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
