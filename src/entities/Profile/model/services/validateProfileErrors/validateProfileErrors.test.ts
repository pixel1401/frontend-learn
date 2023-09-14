import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile, ValidateProfileError } from '../../type/profile';
import { validateProfileData } from './validateProfileErrors';

describe('validateProfileErrors', () => {
    test('not error', () => {
        const data : Profile = {
            first: 'Hello',
            lastname: 'Ульби',
            age: 12,
            country: Country.Kazakhstan,
            currency: Currency.RUB,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        };

        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('show error', () => {
        const data : Profile = {
            first: '',
            lastname: 'Ульби',
            country: Country.Kazakhstan,
            currency: Currency.RUB,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        };

        const result = validateProfileData(data);
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE]);
    });
});
