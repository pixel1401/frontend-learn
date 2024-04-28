import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileSchema } from '../../types/editableProfileCardSchema';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('getLoginIsLoading state ', () => {
        const profile : ProfileSchema = {
            error: 'Error',
            isLoading: false,
            readonly: false,
        };
        const state : DeepPartial<StateSchema> = {
            profile,
        };

        expect(getProfileReadonly(state as StateSchema)).toEqual(false);
    });

    test('state default', () => {
        const state : DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toBeUndefined();
    });
});
