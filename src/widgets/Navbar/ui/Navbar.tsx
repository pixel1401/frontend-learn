import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { User, UserActions, getUserAuthData } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const userAuthData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch(UserActions.logOut());
        setIsAuthModal(false);
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            { userAuthData === null && (
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                </div>
            )}
            {
                userAuthData && (
                    <div className={cls.links}>
                        <Button
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={onLogOut}
                        >
                            {t('Выйти')}
                        </Button>
                    </div>
                )
            }

        </div>
    );
};
