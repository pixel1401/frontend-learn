import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

test('getLoginUsername', () => {
    const state : DeepPartial<StateSchema> = {
        loginForm: {
            username: 'era',
        },
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('era');
});
