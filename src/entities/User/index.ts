import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitData } from './model/selectors/getUserInitData/getUserInitData';
import { UserActions, UserReducer } from './model/slice/user';
import { User, UserSchema } from './model/type/user';

export {
    UserSchema, User, UserReducer, UserActions,
    getUserAuthData, getUserInitData,
};
