import { calculator } from "./calculator";

test('calculator operations', () => {
    expect(calculator.add(10, 3)).toEqual(13);
    expect(calculator.substract(10, 3)).toEqual(7);
    expect(calculator.mul(10, 3)).toEqual(30);
    expect(calculator.div(10, 3)).toBeCloseTo(3.33);
});

