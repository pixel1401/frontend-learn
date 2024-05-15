import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInitData } from './model/selectors/getUserInitData/getUserInitData';
import { UserActions, UserReducer } from './model/slice/user';
import { User, UserSchema } from './model/type/user';
import {
    isUserAdmin, isUser, isUserManager, getUserRoles,
} from './model/selectors/roleSelector/roleSelector';

export {
    UserReducer, UserActions,
    getUserAuthData, getUserInitData,
};

export {
    isUserAdmin, isUser, isUserManager, getUserRoles,
};

export type { UserSchema, User };
export { UserRole };
