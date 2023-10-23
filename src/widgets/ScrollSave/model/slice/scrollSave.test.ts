import { ScrollSaveActions, ScrollSaveReducer } from './scrollSaveSlice';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

describe('ScrollSaveSlice test', () => {
    const state : DeepPartial<ScrollSaveSchema> = {

    };
    test('example', () => {
        // expect(ScrollSaveReducer(state as ScrollSaveSchema, ScrollSaveActions.increment())).toEqual({ value: 11 });
    });
});
