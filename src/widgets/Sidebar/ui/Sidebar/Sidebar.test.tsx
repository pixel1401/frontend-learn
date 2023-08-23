import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithTranslation } from 'shared/lib/jest/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar tests', () => {
    test('is show Sidebar', () => {
        render(renderWithTranslation(<Sidebar />));
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        screen.debug();
    });

    test('toggle close or open sidebar', () => {
        render(renderWithTranslation(<Sidebar />));
        const sidebar = screen.getByTestId('sidebar');
        const toggle = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggle);
        expect(sidebar).toHaveClass('collapsed');
    });
});
