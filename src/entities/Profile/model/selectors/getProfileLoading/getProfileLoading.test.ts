import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileSchema } from '../../type/profile';
import { getProfileLoading } from './getProfileLoading';

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

        expect(getProfileLoading(state as StateSchema)).toEqual(false);
    });

    test('state default', () => {
        const state : DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toBeUndefined();
    });
});
