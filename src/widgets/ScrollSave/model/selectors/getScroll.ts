import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScroll = (state : StateSchema) => state.scrollSave.scrollPage ?? {};

export const getScrollInfo = createSelector(
    getScroll,
    (state: StateSchema, path : string) => path,
    (scroll, path) => scroll[path] ?? 0,
);
