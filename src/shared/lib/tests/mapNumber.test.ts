import { mapArrayNumberToString } from 'shared/lib';

describe('Map array Number to String array', () => {
    test('fist test', () => {
        expect(mapArrayNumberToString([1, 2, 3])).toStrictEqual(['1', '2', '3']);
    });

    test('second test', () => {
        expect(mapArrayNumberToString([1, '2', 3])).toStrictEqual(['1', '3']);
    });
});
