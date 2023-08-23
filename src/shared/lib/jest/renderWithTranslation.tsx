import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18/i18-test';

export function renderWithTranslation(child : ReactNode) {
    return (
        <I18nextProvider i18n={i18n}>
            {child}
        </I18nextProvider>
    );
}
