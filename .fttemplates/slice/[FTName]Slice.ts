import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { <FTName | capitalize>Schema } from '../types/<FTName>Schema';

const initialState: <FTName | capitalize>Schema = {
};

export const <FTName>Slice = createSlice({
    name: '<FTName>',
    initialState,
    reducers: {

    },
});

export const { actions: <FTName | capitalize>Actions } = <FTName>Slice;
export const { reducer: <FTName | capitalize>Reducer } = <FTName>Slice;
