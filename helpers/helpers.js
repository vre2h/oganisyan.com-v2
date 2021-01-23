const allowedKeys = [".", "#", "$", "[", "]", "/"];

export const cleanKey = (key = "") => {
  let newKey = "";

  for (let letter of key) {
    if (allowedKeys.includes(letter)) {
      newKey += "";
    } else {
      newKey += letter;
    }
  }

  return newKey;
};
