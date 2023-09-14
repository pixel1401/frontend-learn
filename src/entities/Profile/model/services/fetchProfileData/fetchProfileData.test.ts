import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Profile } from '../../type/profile';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData', () => {
    const profile : Profile = {
        first: 'Erzhan',
        username: 'admin',
    };
    test('fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profile }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('status 403', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
