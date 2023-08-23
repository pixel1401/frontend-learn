import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/lib';
import MainPage from './MainPage';
import '@testing-library/jest-dom';
// import { MainPage } from 'pages/MainPage';

test('main page Test btn', () => {
    render(
        renderWithTranslation(<MainPage />),
    );
    const button = screen.getByText(/MainPage/i);
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot('new');
});
