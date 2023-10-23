import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
    scrollPage: {},
};

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPage: (state, action: PayloadAction<Record<string, number>>) => {
            const [path] = Object.keys(action.payload);
            const [scrollCount] = Object.values(action.payload);
            state.scrollPage = { ...state.scrollPage, ...{ [`${path}`]: scrollCount } };
        },
    },
});

export const { actions: ScrollSaveActions } = scrollSaveSlice;
export const { reducer: ScrollSaveReducer } = scrollSaveSlice;
