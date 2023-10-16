import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { sendComment } from './sendComment';

describe('sendComment-test', () => {
    test('send cooment fetch', () => {
        const textTest = 'Hello world';
        const thunk = new TestAsyncThunk(sendComment);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: textTest }));
    });
});
