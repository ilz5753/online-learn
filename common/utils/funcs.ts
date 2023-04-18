export function noop() { }
export function randomPositionArray<T>(array: T[]) {
    const newArray = array.slice();
    // Sort the copy using a random comparison function
    newArray.sort(() => Math.random() - 0.5);
    return newArray;
}
export function ObjToArray(obj: Record<string, string>) {
    let arr: string[] = [];
    for(let k in obj) arr.push(obj[k]);
    return arr;
}