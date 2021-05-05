export const toRna = (dna) => {
  return dna.replace(/[ACGT]/g, (match, offset, string) => {
    switch (match) {
      case 'A':
        return 'U';
        break;
      case 'C':
        return 'G';
        break;
      case 'G':
        return 'C';
        break;
      case 'T':
        return 'A';
        break;
      default:
        return '';
        break;
    }
  });
};

/*
Cleaner solution compared to my original...


export const toRna = (dna) => {

  const elementObj= {
    "C":"G",
    "G":"C",
    "T":"A",
    "A":"U"};

  return [...dna].map(element => elementObj[element]).join('');
};
*/