import { FC } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from 'features/EditableProfileCard';

interface ProfilePageProps {
}

const ProfilePage : FC<ProfilePageProps> = () => {
    const { t } = useTranslation();
    const params = useParams<{id: string}>();

    if (!params.id) {
        return <Text title="Not Id" theme={TextTheme.ERROR} />;
    }

    return (
        <Page>
            <Text title="Profile page" />
            <EditableProfileCard id={params.id} />
        </Page>
    );
};

export default ProfilePage;
