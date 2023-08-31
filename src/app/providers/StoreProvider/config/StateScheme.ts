import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/type/loginSchema';

export interface StateScheme {
    counter : CounterSchema,
    user : UserSchema,
    login: LoginSchema
}
