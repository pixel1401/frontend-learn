import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileSchema, ValidateProfileError } from '../../type/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('getProfileValidateErrors state ', () => {
        const profile : ProfileSchema = {
            error: 'Error',
            isLoading: false,
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        const state : DeepPartial<StateSchema> = {
            profile,
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(profile.validateErrors);
    });

    test('state default', () => {
        const state : DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBeUndefined();
    });
});
