import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from './MainPage';
// import { MainPage } from 'pages/MainPage';

test('main page Test btn', () => {
    render(<MainPage />);
    const button = screen.getByText(/MainPage/i);
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot('new');
});
