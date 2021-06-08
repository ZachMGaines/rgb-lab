export default ({ name }) => {
  // const { name } = object;
  return name;

};

export function copyAndPush(array, n) {
  const newArray = [...array];
  newArray.push(n);
  return [array, newArray];

}

