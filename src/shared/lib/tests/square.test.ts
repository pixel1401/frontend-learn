import { square } from './square';

describe('square test', () => {
    test('fist', () => {
        const sqpMathPow = jest.spyOn(Math, 'pow');
        square(3);
        expect(sqpMathPow).toBeCalledTimes(1);
    });

    test('second', () => {
        const sqpMathPow = jest.spyOn(Math, 'pow');
        square(6);
        expect(sqpMathPow).toBeCalledTimes(1);
    });

    test('1', () => {
        const sqpMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(sqpMathPow).toBeCalledTimes(0);
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
});
