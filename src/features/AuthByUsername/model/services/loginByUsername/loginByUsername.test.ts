import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { User, UserActions, UserRole } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
    // let dispatch : Dispatch;
    // let getState : ()=> StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('test async action', async () => {
    //     const userValue = { username: 'admin', id: '1' };

    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);

    //     expect(dispatch).toHaveBeenCalledWith(UserActions.setAuthData(userValue));
    //     expect(dispatch).toBeCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // });

    // test('status 403', async () => {
    //     const userValue = { username: 'admin', id: '1' };

    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toBeCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    test('test async action', async () => {
        const userValue : User = { username: 'admin', id: '1', role: [UserRole.ADMIN] };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: '123', password: '123' });
        console.log(result);

        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(userValue));
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('status 403', async () => {
        const userValue = { username: 'admin', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
