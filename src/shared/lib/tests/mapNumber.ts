export function mapArrayNumberToString(value : Array<any>) {
    return value.filter((item) => Number.isInteger(item)).map(String);
}
