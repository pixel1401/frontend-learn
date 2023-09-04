import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';
import { LoginActions, LoginReducer } from './loginSlice';
import { LoginSchema } from '../type/loginSchema';

describe('loginSlice', () => {
    test('action password', () => {
        const state : DeepPartial<LoginSchema> = {
            password: '',
        };

        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123'))).toEqual({ password: '123' });
    });

    test('action username', () => {
        const state : DeepPartial<LoginSchema> = {
            username: '',
        };

        expect(LoginReducer(state as LoginSchema, LoginActions.setUserName('123'))).toEqual({ username: '123' });
    });
});
