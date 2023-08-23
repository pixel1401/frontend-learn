import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button UI Test', () => {
    test('Button is show ?', async () => {
        render(
            <Button>12</Button>,
        );
        const button = screen.getByText(/12/i);
        expect(button).toBeInTheDocument();
    });

    test('Button check class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);
        const btn = screen.getByText('Hello');
        expect(btn).toHaveClass('clear');
        screen.debug();
    });
});
