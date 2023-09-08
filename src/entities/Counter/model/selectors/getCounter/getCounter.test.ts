import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('test getCounter', () => {
    test('COunter state show initial value', () => {
        const state : DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
