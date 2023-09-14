import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from '../../type/profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('getLoginIsLoading state ', () => {
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
        const state : DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('state default', () => {
        const state : DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBeUndefined();
    });
});
