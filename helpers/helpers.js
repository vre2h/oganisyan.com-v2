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

export const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(find, "g"), replace);
};

export const isServer = () => typeof window === "undefined";
