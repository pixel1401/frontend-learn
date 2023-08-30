import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('value is show', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 15 },
            },
        });
        expect(screen.getByTestId('value')).toHaveTextContent('15');
    });
    test('Increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 15 },
            },
        });
        fireEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('value')).toHaveTextContent('16');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 15 },
            },
        });
        fireEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('value')).toHaveTextContent('14');
    });
});
