import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../type/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter : CounterSchema) => counter.value,
);
