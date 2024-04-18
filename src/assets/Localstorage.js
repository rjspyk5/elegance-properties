export const getData = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

export const setData = (key, data) => {
  const prevData = getData(key);
  const duplicateCheck = prevData.find((el) => el === data);
  if (duplicateCheck) {
    return true;
  } else {
    localStorage.setItem(key, JSON.stringify([...prevData, data]));
    return false;
  }
};

export const removeData = (key, data) => {
  const prevData = getData(key);
  const updateData = prevData.filter((el) => el !== data);
  localStorage.setItem(key, JSON.stringify(updateData));
};
