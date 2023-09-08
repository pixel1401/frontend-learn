import { CounterActions, CounterReducer } from './counter';
import { CounterSchema } from '../type/counterSchema';

describe('CounterSLICE test', () => {
    const state : DeepPartial<CounterSchema> = {
        value: 10,
    };
    test('increment', () => {
        expect(CounterReducer(state as CounterSchema, CounterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        expect(CounterReducer(state as CounterSchema, CounterActions.decrement())).toEqual({ value: 9 });
    });

    test('initial state', () => {
        expect(CounterReducer(undefined, CounterActions.decrement())).toEqual({ value: -1 });
    });
});
