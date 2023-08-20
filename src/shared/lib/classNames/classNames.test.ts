import { classNames } from './classNames';

describe('classNamesTest', () => {
    test('mina Class', () => {
        expect(classNames('cls')).toBe('cls');
    });

    test('additional classes', () => {
        expect(classNames('cls', { isHover: false }, ['ad1', 'ad2'])).toBe('cls ad1 ad2');
    });

    test('optional class', () => {
        expect(classNames('cls', { isHover: true }, ['ad1', 'ad2'])).toEqual('cls ad1 ad2 isHover');
    });
});
