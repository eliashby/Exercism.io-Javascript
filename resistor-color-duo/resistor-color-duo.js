//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const value = (colorList) => {
  return parseInt(`${colors.indexOf(colorList[0])}${colors.indexOf(colorList[1])}`);
};
