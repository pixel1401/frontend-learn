import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

test('getLoginPassword', () => {
    const state : DeepPartial<StateSchema> = {
        loginForm: {
            password: '123',
        },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
});
