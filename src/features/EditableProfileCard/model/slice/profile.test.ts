import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { ProfileActions, ProfileReducer } from './profile';

describe('slice-profile', () => {
    test('setReadonly', () => {
        const data : ProfileSchema = {
            isLoading: false,
            readonly: false,
        };
        expect(ProfileReducer(data, ProfileActions.setReadonly(true))).toEqual({ isLoading: false, readonly: true } as ProfileSchema);
    });

    test('updateProfileData.fulfilled', () => {
        const data : ProfileSchema = {
            isLoading: false,
            readonly: false,
        };
        expect(ProfileReducer(data, updateProfileData.fulfilled)).toEqual({ isLoading: false, readonly: true, validateErrors: [] } as ProfileSchema);
    });
});
