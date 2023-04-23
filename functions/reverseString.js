export function reverseString(word){
    let reversedWord = '';
    for(let char = word.length - 1; char >= 0; char--){
        reversedWord += word.charAt(char);
    }
    return reversedWord;
}