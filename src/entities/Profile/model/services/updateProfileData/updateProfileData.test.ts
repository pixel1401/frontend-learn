import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from '../../type/profile';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData', () => {
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
    test('fetch', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('status 403', async () => {
        const thunk = new TestAsyncThunk(updateProfileData);
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
