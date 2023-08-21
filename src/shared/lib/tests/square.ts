export function square(value : number) {
    if (value === 1) return 1;
    // eslint-disable-next-line prefer-exponentiation-operator, no-restricted-properties
    return Math.pow(value, 2);
}
