
// const request = require('supertest');
// const app = require('../lib/app');
import getName, { copyAndPush, capitalizeAndFilter } from '../lib/rgbapp.js';


describe('rgrefactor routes', () => {
  //   beforeEach(() => {
  //     return setup(pool);
  //   });

  test('this is a test that will return the name in the object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot); // returns spot
    expect(actual).toEqual('spot');

  });

  test('this is a test that will return the name in the object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const actual = getName(character); // returns Aang
    expect(actual).toEqual('Aang');


  });



  test('returns a new array with all the items in the original array and a new item pushed to the end.', () => {
    const numbers = [1, 2, 3];
    const actual = copyAndPush(numbers, 4); // return [1, 2, 3, 4];
    expect(actual).toEqual([numbers, [1, 2, 3, 4]]);
  });

  test('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f', () => {
    const stringArray = ['fox', 'dog', 'cat', 'ferret'];
    expect(capitalizeAndFilter(stringArray)).toEqual(['DOG', 'CAT']);
  });

  // test.skip('Use the Futurama Quote API http://futuramaapi.herokuapp.com to return a single quote with the format:', () => {
  //   const quote = await fetchQuotes(1);

  //   expect(quote).toEqual({
  //     name: expect.any(String),
  //     text: expect.any(String),
  //     image: expect.any(String),
  //   }
  //   );
  // });

});
