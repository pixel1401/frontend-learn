import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

test('getLoginError', () => {
    const state : DeepPartial<StateSchema> = {
        loginForm: {
            error: 'error',
        },
    };

    expect(getLoginError(state as StateSchema)).toEqual('error');
});
