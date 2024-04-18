export const getData = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

export const setData = (key, data) => {
  const prevData = getData(key);
  localStorage.setItem(key, JSON.stringify([...prevData, data]));
};

export const removeData = (data) => {
  const prevData = getData();
  const updateData = prevData.filter((el) => el !== data);
  localStorage.setItem("estate", JSON.stringify(updateData));
};
