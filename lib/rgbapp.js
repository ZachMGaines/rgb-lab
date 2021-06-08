// import fetch from 'node-fetch';

export default ({ name }) => {
  // const { name } = object;
  return name;

};

export function copyAndPush(array, n) {
  const newArray = [...array];
  newArray.push(n);
  return [array, newArray];

}

export function capitalizeAndFilter(array) {
  const newArray = [];
  for (const element of array) {
    const upperCase = element.toUpperCase();
    if (upperCase.charAt(0) !== 'F')
      newArray.push(upperCase);
  }
  return newArray;
}



// export async function fetchQuotes(number) {
//   const response = await fetch(`http://futuramaapi.herokuapp.com/api/quotes/${number}`);
//   const quote = await response.json();
//   return {
//     name: quote[0].character,
//     text: quote[0].quote,
//     image: quote[0].image
//   };
// }
