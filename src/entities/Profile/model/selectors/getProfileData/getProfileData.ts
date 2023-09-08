import { StateSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../type/profile';

export const getProfileData = (state : StateSchema) => state?.profile?.data;
