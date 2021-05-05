export const compute = (strandOne, strandTwo) => {
  if (strandOne === strandTwo) {
    return 0;
  } else if (strandOne.length !== strandTwo.length && strandOne.length > 0 && strandTwo.length > 0) {
    throw(new Error('left and right strands must be of equal length'));
  } else if (strandOne.length > 0 && strandTwo.length === 0) {
    throw(new Error('right strand must not be empty'));
  } else if (strandTwo.length > 0 && strandOne.length === 0) {
    throw(new Error('left strand must not be empty'));
  } else {
    return [...strandOne].filter((nucleotide, idx) => nucleotide !== strandTwo[idx]).length;
  }
};
