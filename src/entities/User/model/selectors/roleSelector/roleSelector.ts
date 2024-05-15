import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { UserRole } from '../../consts/consts';

export const getUserRoles = (state : StateSchema) => state.user?.authData?.role;

export const isUserAdmin = createSelector(getUserRoles, (role) => role?.includes(UserRole.ADMIN));
export const isUserManager = createSelector(getUserRoles, (role) => role?.includes(UserRole.MANAGER));
export const isUser = createSelector(getUserRoles, (role) => role?.includes(UserRole.USER));
