export function analyzeArray(array) {
  if (typeof array !== "object") throw new Error("Input must be an array");
  const sum = array.reduce((acum, elem) => {
    return acum + elem;
  }, 0);
  let object = {
    average: Math.floor(sum / array.length),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return object;
}
