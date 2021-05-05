import { statSync } from "fs";

//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const strArr = str.toLowerCase().split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.includes(alphabet[i]) === false) {
      return false;
    }
  }
  return true;
};
