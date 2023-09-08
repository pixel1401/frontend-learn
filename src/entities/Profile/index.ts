import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileActions, ProfileReducer } from './model/slice/profile';
import { ProfileSchema } from './model/type/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    ProfileActions, ProfileReducer, ProfileSchema,
    fetchProfileData,
    getProfileError, getProfileData, getProfileLoading,
    ProfileCard,
};
