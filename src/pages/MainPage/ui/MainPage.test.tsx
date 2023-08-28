import { render, screen } from '@testing-library/react';
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
});
