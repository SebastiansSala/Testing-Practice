const caesar = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

export function caesarCipher(word, shift) {
  let shiftedWord = "";

  for (let i = 0; i < word.length; i++) {
    const currentChar = word.charAt(i).toLowerCase();
    if (caesar.hasOwnProperty(currentChar)) {
      const oldIndex = caesar[currentChar];
      const newIndex = (oldIndex + shift) % 26;
      for (const [char, index] of Object.entries(caesar)) {
        if (index === newIndex) {
          if (word[i] === currentChar) {
            shiftedWord += char;
          } else {
            shiftedWord += char.toUpperCase();
          }
          break;
        }
      }
    } else {
      shiftedWord += word[i];
    }
  }
  return shiftedWord;
}
