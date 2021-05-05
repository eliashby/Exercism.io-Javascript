export const countWords = (sentance) => {
  return sentance
    .match(/\S+/g)
    .map(word => word.toLowerCase())
    .reduce((acc, n) => Object.assign({}, acc, { [n]: isNaN(acc[n]) ? 1 : acc[n] + 1 }), {});
};
