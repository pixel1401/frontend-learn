import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/type/loginSchema';

export interface StateSchema {
    counter : CounterSchema,
    user : UserSchema,

    // ASYNC REDUCERS
    login?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;
