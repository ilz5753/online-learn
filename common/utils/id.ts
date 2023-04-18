export const RNDId = (length = 100) => {
    let smallChars = "abcdefghijklmnopqrstuvwxyz";
    let capChars = smallChars.toUpperCase();
    let numbers = "0123456789";
    let specialChars = `!@#$%^&*()_+-./:;<=>?\'"|,`;
    let ac = [...smallChars, ...capChars, ...numbers, ...specialChars];
    let res = "";
    for (let i = 0; i < length; i++) res += ac[Math.floor(Math.random() * ac.length)];
    return res;
}