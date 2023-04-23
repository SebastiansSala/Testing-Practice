import { analyzeArray } from "./analyzeArray";

test("Throws an error if input is not an array", () => {
    expect(() => analyzeArray("not an array")).toThrow("Input must be an array");
  });

test('calculator operations', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6 
    });
});
