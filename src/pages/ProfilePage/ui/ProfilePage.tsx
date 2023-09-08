import { ProfileCard, fetchProfileData } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <>
            <Text title="Profile page" />
            <ProfileCard />
        </>
    );
};

export default ProfilePage;
