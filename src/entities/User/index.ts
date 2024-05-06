import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitData } from './model/selectors/getUserInitData/getUserInitData';
import { UserActions, UserReducer } from './model/slice/user';
import { User, UserSchema, UserRole } from './model/type/user';
import {
    isUserAdmin, isUser, isUserManager, getUserRoles,
} from './model/selectors/roleSelector/roleSelector';

export {
    UserSchema, User, UserReducer, UserActions, UserRole,
    getUserAuthData, getUserInitData,
};

export {
    isUserAdmin, isUser, isUserManager, getUserRoles,
};
