import {
    ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg,
} from './config/StateSchema';
import { AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
};

export type {
    StateSchema, ReduxStoreWithManager, AppDispatch,
    ThunkExtraArg, ThunkConfig,
};

// export { defaultAsyncReducers } from './config/StateSchema';
