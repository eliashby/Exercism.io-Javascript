export const convert = (str) => {
  let answer = '';

  if (str % 3 === 0) {
    answer += 'Pling';
  }
  if (str % 5 === 0) {
    answer += 'Plang';
  }
  if (str % 7 === 0) {
    answer += 'Plong';
  }

  return answer === '' ? str.toString() : answer;
};
