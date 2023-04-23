import { capitalize } from "./capitalize";

test('capitalize first char', () => {
    const word = 'test';
    expect(capitalize(word)).toMatch(/Test/);
})

