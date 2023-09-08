import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

test('getLoginState', () => {
    const state : DeepPartial<StateSchema> = {
        loginForm: {
            password: '123',
            username: 'use',
        },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
        password: '123',
        username: 'use',
    });
});
