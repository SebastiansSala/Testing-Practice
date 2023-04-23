import { caesarCipher } from "./caesarCipher";

test('crypt word', () => {
    expect(caesarCipher('quetal', 1)).toMatch(/rvfubm/);
    expect(caesarCipher('quetal', 15)).toMatch(/fjtipa/);
    expect(caesarCipher('quetal', 12)).toMatch(/cgqfmx/);
    expect(caesarCipher('quetal', 3)).toMatch(/txhwdo/);
})