import { AsyncThunk, AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = AsyncThunkAction<Return, Arg , {rejectValue : RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch : Dispatch;
    getState : ()=> StateSchema;

    constructor(actionCreator: (arg : Arg))
}
