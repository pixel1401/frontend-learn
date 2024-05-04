import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import {
    getProfileReadonly, ProfileActions, getProfileData, updateProfileData,
} from 'features/EditableProfileCard';
import cls from './EditableProfileCardHeader.module.scss';

export const EditableProfileCardHeader = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    if (canEdit === false) {
        return null;
    }

    return (
        <>
            <div className={cls.ProfilePageHeader} data-testid="EditableProfileCardHeader.Container">
                <Text title={t('Profile')} data-testid="EditableProfileCardHeader.Title" />
                { readonly
                    ? (
                        <Button
                            className={cls.editBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelBtn"
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                className={cls.saveBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                                data-testid="EditableProfileCardHeader.SaveButton"
                            >
                                {t('Сохранить')}
                            </Button>
                        </>
                    )}
            </div>
        </>
    );
};
