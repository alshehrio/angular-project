export const setItem = (key: string, item) => {
  if (typeof item === 'string') {
    localStorage.setItem(key, item);
  } else {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  try {
    return JSON.parse(item);
  } catch (e) {
    return item;
  }
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
