import { AddCommentFormActions, AddCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

describe('features/ addCommentFormSlice.ts', () => {
    test('setText', () => {
        const testText = 'Hello';
        const state : AddCommentFormSchema = {
            isLoading: false,
        };
        expect(AddCommentFormReducer(state, AddCommentFormActions.setText(testText))).toEqual({ isLoading: false, text: testText });
    });
});
