import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';
import { ProfileSchema } from '../../types/editableProfileCardSchema';

describe('getProfileError', () => {
    test('getLoginIsLoading state ', () => {
        const profile : ProfileSchema = {
            error: 'Error',
            isLoading: false,
            readonly: false,
        };
        const state : DeepPartial<StateSchema> = {
            profile,
        };

        expect(getProfileError(state as StateSchema)).toEqual('Error');
    });

    test('state default', () => {
        const state : DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBeUndefined();
    });
});
