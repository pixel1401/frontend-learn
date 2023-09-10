import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, UserActions } from 'entities/User';
import { useDispatch } from 'react-redux';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            // const response = await axios.post<User>('http://localhost:8000/login', authData);
            const response = await extra.api.post<User>('login', authData);

            if (!response.data) {
                throw new Error();
            }

            console.log(response.data);

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(UserActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue('Вы ввели неправильный логин или пароль');
        }
    },
);
