function findNaughtyStep(original, modified) {

    if (original === modified) return '';
  
  for (let i = 0; i < Math.max(original.length, modified.length); i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]; 
    }
  }
}

// Examples
const result1 = findNaughtyStep('abcd', 'abcde'); // 'e'
const result2 = findNaughtyStep('stepfor', 'stepor'); // 'f'
const result3 = findNaughtyStep('abcde', 'abcde'); // ''

console.log(result1);
console.log(result2);
console.log(result3);
