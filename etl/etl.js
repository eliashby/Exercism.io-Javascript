export const transform = (oldData) => {
  const newData = {};
  for (let key of Object.keys(oldData)) {
    for (let i = 0; i < oldData[key].length; i++) {
      let newKey = oldData[key][i].toLowerCase();
      if (newKey) {
        newData[newKey] = Number(key);
      } else {
        newData[newKey] += Number(key);
      }
    }
  }

  return newData;
};


/* Newer way of doing it

export const transform = (obj) => {
  let transformed = new Object();
  for (let [key,list] of Object.entries(obj)){
    for (let elem of list){
      transformed[elem.toLowerCase()] = Number(key);
    };
  };
  return transformed;
};

*/