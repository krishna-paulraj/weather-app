const arr: string[] = ["Pune", "Mumbai", "Nagpur"];

export const addHistory = (place: string) => {
  arr.unshift(place);
};

export const showHistory = () => {
  console.log(arr.slice(0, 3));
  return arr.slice(0, 3);
};
