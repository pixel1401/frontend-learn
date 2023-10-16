import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText } from './getAddCommentForm';

describe('getAddCommentForm.test', () => {
    test('get Text', () => {
        const testText = 'Hello';
        const state : DeepPartial<StateSchema> = {
            addCommentForm: {
                text: testText,
                isLoading: false,
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(testText);
    });
});
