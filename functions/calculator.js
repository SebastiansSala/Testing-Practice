export const calculator = (() =>{
    const add = (a, b) => a + b;
    const substract = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {add, substract, mul, div}
})();