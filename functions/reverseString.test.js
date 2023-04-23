import { reverseString } from "./reverseString"
test('reverse String', () => {
    const word = 'prueba de esto';
    expect(reverseString(word)).toMatch(/otse ed abeurp/);
});