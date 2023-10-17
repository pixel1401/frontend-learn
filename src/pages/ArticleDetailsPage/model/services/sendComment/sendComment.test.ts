import { avatar } from 'shared/assets/test/storybook.jpg';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { sendComment } from './sendComment';

describe('sendComment-test', () => {
    test('send cooment fetch', async () => {
        const commentValue = {
            id: '1',
            text: 'hello',
        };
        const thunk = new TestAsyncThunk(sendComment, { user: { authData: { id: '1' } }, articleDetail: { data: { id: '1' } } });
        thunk.api.post.mockReturnValue(Promise.resolve({ data: commentValue }));
        const result = await thunk.callThunk('hello');
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
    });
});
