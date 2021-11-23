export const rowalizer = (array, item_per_row = 3) => {
  const rowsNumber = Math.ceil(array.length / item_per_row);
  return Array.from({ length: rowsNumber }, (_, num) => {
    let start = num * item_per_row;
    let end = start + item_per_row;
    return array.slice(start, end);
  });
};

export const getItemFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
};

export const setLocalStorageItem = (key, item) => {
  if (item && typeof key === "string") {
    localStorage.setItem(key, JSON.stringify(item));
  }
};
